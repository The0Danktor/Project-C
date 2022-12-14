using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;

namespace Project_C.Services
{
    public class AuthService : IAuthService
    {

        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        public AuthService(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<string?> Login(UserLoginDto request)
        {
            var user = await _context.users.SingleOrDefaultAsync(x => x.Email == request.Email);
            if (user == null) return null;
            if (!VerifyPasswordHash(request.Password, user.passwordHash, user.passwordSalt)) return null;
            string token = CreateToken(user);
            return token;

        }

        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email , user.Email),
                new Claim(ClaimTypes.Role , user.Role.ToString()),
                new Claim(ClaimTypes.Name , user.Name),
                new Claim(ClaimTypes.Sid , user.Id.ToString()),
                new Claim(ClaimTypes.MobilePhone , user.Phone),
                new Claim(ClaimTypes.GroupSid , user.CompanyId.ToString()),
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

        public async Task<UserLoginDto> Register(UserRegistrationDto request)
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

        public bool VerifyPasswordHash(string password , string passwordHash, string passwordSalt)
        {
            using( var hmac = new HMACSHA512(Convert.FromBase64String(passwordSalt)))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(Convert.FromBase64String(passwordHash));
            }
        }

        public static class PasswordGenerator
        {
            // Generate a random password with 5 numbers
            public static string GeneratePassword()
            {
                var password = string.Join("", Enumerable.Range(0, 5).Select(i => RandomNumber()));
                return password;
            }

            // Generate a random number between 0 and 9
            static int RandomNumber()
            {
                using (var rng = new RNGCryptoServiceProvider())
                {
                    var randomNumber = new byte[1];
                    rng.GetBytes(randomNumber);
                    return (randomNumber[0] % 10);
                }
            }
        }
    }
}
