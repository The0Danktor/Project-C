using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetUserDto>> Get(string id)
        {
            var user = await _userService.Get(Guid.Parse(id));
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpGet("ByCompany/{userId}")]
        public async Task<ActionResult<IEnumerable<GetUserDto>>> GetByCompany(string userId)
        {
            var user = await _userService.Get(Guid.Parse(userId));
            if (user == null || user.CompanyId == null) return NotFound();

            var users = await _userService.GetByCompany(user.CompanyId.Value);

            return Ok(users);
        }
    }
}