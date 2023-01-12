using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class SolutionController : ControllerBase
    {
        readonly ISolutionService _solutionService;

        public SolutionController(ISolutionService solutionService)
        {
            _solutionService = solutionService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetSolutionDto>>> GetAllSolutions()
        {
            return Ok(await _solutionService.GetAllSolutions());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetSolutionDto>> GetSolutionById(Guid id)
        {
            var result = await _solutionService.GetSolutionById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost] [Authorize (Roles = "Viscon_admin, Viscon_employee")]
        public async Task<ActionResult<List<GetSolutionDto>>> AddSolution(AddSolutionDto solution)
        {
            return Ok(await _solutionService.AddSolution(solution));
        }
    }
}