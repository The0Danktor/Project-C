using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        
        [HttpPost("register")]
        public async Task<ActionResult<UserLoginDto>> Register(UserRegistrationDto request)
        {
            var response = await _authService.Register(request);
            if (response == null) return BadRequest(new {message = "Email already exists"});
            return Ok(response);
        }
    }
}