using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class AuthService : IAuthService
    {

        private readonly DataContext _context;

        public AuthService(DataContext context)
        {
            _context = context;
        }

        public async Task<string> Login(UserLoginDto request)
        {
            throw new NotImplementedException();
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
