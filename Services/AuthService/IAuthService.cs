using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IAuthService
    {
        public Task<UserLoginDto?> Register(UserRegistrationDto request);
        public Task<bool> ChangePassword(string request);
        public Task<string?> Login(UserLoginDto request);
        public Task<GetUserDto?> GetCurrentUser();
        public Task<UserLoginDto?> RegisterClient(ClientUserRegistrationDto request);
        public Task<UserLoginDto?> RegisterClientAdmin(ClientUserRegistrationDto request);
        public Task<UserLoginDto?> RegisterVisconEmployee(VisconUserRegistrationDto request);
        public Task<UserLoginDto?> RegisterVisconAdmin(VisconUserRegistrationDto request);
    }
}