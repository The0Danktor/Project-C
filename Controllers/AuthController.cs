using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        
        [HttpGet, Authorize]
        public async Task<ActionResult<GetUserDto>> GetCurrentUser()
        {
            var response = await _authService.GetCurrentUser();
            if (response == null) return BadRequest(new {message = "Invalid credentials"});
            return Ok(response);
        }

        [HttpPost("ChangePassword")]
        [Authorize]
        public async Task<ActionResult<bool>> ChangePassword( ChangePasswordDto request )
        {
            var response = await _authService.ChangePassword(request.newPassword);
            if (response == false) return BadRequest(new {message = "Restrictions not met"});
            return Ok(response);
        }

        [HttpPost("register")] [Authorize(Roles = "Viscon_admin")]
        public async Task<ActionResult<UserLoginDto>> Register(UserRegistrationDto request)
        {
            var response = await _authService.Register(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }
        
        [HttpPost("registerClient")] [Authorize(Roles = "Viscon_admin, Viscon_employee, Client_admin")]
        public async Task<ActionResult<UserLoginDto>> RegisterClient(ClientUserRegistrationDto request)
        {
            var response = await _authService.RegisterClient(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }

        [HttpPost("registerClientAdmin")] [Authorize(Roles = "Viscon_admin, Viscon_employee")]
        public async Task<ActionResult<UserLoginDto>> RegisterClientAdmin(ClientAdminRegistrationDto request)
        {
            var response = await _authService.RegisterClientAdmin(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }

        [HttpPost("registerVisconEmployee")] [Authorize(Roles = "Viscon_admin")]
        public async Task<ActionResult<UserLoginDto>> RegisterVisconEmployee(VisconUserRegistrationDto request)
        {
            var response = await _authService.RegisterVisconEmployee(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }

        [HttpPost("registerVisconAdmin")] [Authorize(Roles = "Viscon_admin")]
        public async Task<ActionResult<UserLoginDto>> RegisterVisconAdmin(VisconUserRegistrationDto request)
        {
            var response = await _authService.RegisterVisconAdmin(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }


        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(UserLoginDto request)
        {
            var response = await _authService.Login(request);
            if (response == null) return BadRequest(new {message = "Invalid credentials"});
            return Ok(response);
        }
    }
}