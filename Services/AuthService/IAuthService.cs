using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IAuthService
    {
        public Task<UserLoginDto> Register(UserRegistrationDto request);
        public Task<string> Login(UserLoginDto request);
    }
}