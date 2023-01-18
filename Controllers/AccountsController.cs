using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project_C.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet] [Authorize(Roles = "Viscon_admin, Viscon_employee")]
        public async Task<ActionResult> GetAllUsers()
        {
            var users = await _accountService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("small")] [Authorize(Roles = "Viscon_admin, Viscon_employee")]
        public async Task<ActionResult> GetSmallUsers()
        {
            var users = await _accountService.GetSmallusers();
            return Ok(users);
        }
    }
}