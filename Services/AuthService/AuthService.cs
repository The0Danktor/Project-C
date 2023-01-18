using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Text.RegularExpressions;

namespace Project_C.Services
{
    public class AuthService : IAuthService
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthService(DataContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> ChangePassword(string request)
        {
            //password must contain at least one lowercase letter, one uppercase letter, one digit, and be between 8 and 15 characters long regex
            Regex regex = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$");
            if (!regex.IsMatch(request)) return false;
            Console.WriteLine("Password is valid");
            var userId = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Sid);
            if (userId == null) return false;
            var user = await _context.users.FindAsync(Guid.Parse(userId));
            if (user == null) return false;
            HashPassword(request, out byte[] passwordHash, out byte[] passwordSalt);
            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);
            user.ResetPassword = false;
            _context.users.Update(user);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<GetUserDto?> GetCurrentUser()
        {
            var userId = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Sid);
            if (userId == null)
                return null;
            
            var user = await _context.users.FindAsync(Guid.Parse(userId));
            if (user == null)
                return null;
            
            return new GetUserDto(user);
        }

        public async Task<string?> Login(UserLoginDto request)
        {
            var user = await _context.users.SingleOrDefaultAsync(x => x.Email == request.Email);
            if (user == null) return null;
            if (!VerifyPasswordHash(request.Password, user.passwordHash, user.passwordSalt)) return null;
            string token = CreateToken(user);
            return token;
        }

        public async Task<User?> Get(Guid id)
        {
            var user = await _context.users.FindAsync(id);
            return user;
        }

        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Sid , user.Id.ToString()),
                new Claim(ClaimTypes.Role , user.Role.ToString())
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                _configuration.GetSection("AppSettings:Issuer").Value,
                _configuration.GetSection("AppSettings:Audience").Value,
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        public async Task<UserLoginDto?> Register(UserRegistrationDto request)
        {
            User user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Role = request.Role,
                CompanyId = request.CompanyId,
                ResetPassword = true
            };

            UserLoginDto userLoginDto = new UserLoginDto
            {
                Email = user.Email,
            };
            string password = PasswordGenerator.GeneratePassword();
            userLoginDto.Password = password;
            HashPassword(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return userLoginDto;
        }

        public void HashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public bool VerifyPasswordHash(string password, string passwordHash, string passwordSalt)
        {
            using (var hmac = new HMACSHA512(Convert.FromBase64String(passwordSalt)))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(Convert.FromBase64String(passwordHash));
            }
        }

        public async Task<UserLoginDto?> RegisterClient(ClientUserRegistrationDto request)
        { 
             var userId = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Sid);
            if (userId == null) return null;
            var CompanyId = await _context.users.Select(x => x.CompanyId).SingleOrDefaultAsync(x => x == Guid.Parse(userId));
            if (CompanyId == null) return null;
            
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Role = Role.Client,
                CompanyId = CompanyId,
                ResetPassword = true
            };
            UserLoginDto userLoginDto = new UserLoginDto
            {
                Email = user.Email,
            };
            string password = PasswordGenerator.GeneratePassword();
            userLoginDto.Password = password;
            HashPassword(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return userLoginDto;
        }

        public async Task<UserLoginDto?> RegisterClientAdmin(ClientAdminRegistrationDto request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Role = Role.Client_admin,
                CompanyId = request.CompanyId,
                ResetPassword = true
            };
            UserLoginDto userLoginDto = new UserLoginDto
            {
                Email = user.Email,
            };
            string password = PasswordGenerator.GeneratePassword();
            userLoginDto.Password = password;
            HashPassword(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return userLoginDto;

            throw new NotImplementedException();
        }

        public async Task<UserLoginDto?> RegisterVisconEmployee(VisconUserRegistrationDto request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Role = Role.Viscon_employee,
                ResetPassword = true
            };
            UserLoginDto userLoginDto = new UserLoginDto
            {
                Email = user.Email,
            };
            string password = PasswordGenerator.GeneratePassword();
            userLoginDto.Password = password;
            HashPassword(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return userLoginDto;
        }

        public async Task<UserLoginDto?> RegisterVisconAdmin(VisconUserRegistrationDto request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Role = Role.Viscon_admin,
                ResetPassword = true
            };
            UserLoginDto userLoginDto = new UserLoginDto
            {
                Email = user.Email,
            };
            string password = PasswordGenerator.GeneratePassword();
            userLoginDto.Password = password;
            HashPassword(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = Convert.ToBase64String(passwordHash);
            user.passwordSalt = Convert.ToBase64String(passwordSalt);

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return userLoginDto;
        }

        public static class PasswordGenerator
        {
            // Generate a random password with 9 random characters
            public static string GeneratePassword()
            {
                const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                StringBuilder res = new StringBuilder();
                Random rnd = new Random();
                while (res.Length < 9)
                {
                    res.Append(valid[rnd.Next(valid.Length)]);
                }
                return res.ToString();
            }
        }
    }
}
