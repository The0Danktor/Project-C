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
    [Authorize]
    public class ProblemController : ControllerBase
    {
        private readonly IProblemService _problemService;

        public ProblemController(IProblemService problemService)
        {
            _problemService = problemService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetProblemDto>>> GetAllProblems()
        {
            return Ok(await _problemService.GetAllProblems());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetProblemDto>> GetProblemById(Guid id)
        {
           var result = await _problemService.GetProblemById(id);

           if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
            
        }

        [HttpGet("{id}/Solution")]
        public async Task<ActionResult<GetProblemWithSolutionDto>> GetProblemWithSolutionById(Guid id)
        {
            var result = await _problemService.GetProblemWithSolutionById(id);

            if (result == null || result.Count == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost] [Authorize (Roles = "Viscon_employee")]
        public async Task<ActionResult<List<GetProblemDto>>> AddProblem(AddProblemDto problem)
        {
            return Ok(await _problemService.AddProblem(problem));
        }
    }
}