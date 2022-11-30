using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MachineController : ControllerBase
    {
        private readonly DataContext _context;

        public MachineController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
           var query = from m in _context.Machines
                       select new {m.Id, m.Name,};
            return Ok(query.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Machine> Get(Guid id)
        {
            var machine = from m in _context.Machines
                          where m.Id == id
                          select new {m.Id, m.Name,};

            if (machine == null)
            {
                return NotFound();
            }

            return Ok(machine.ToList());
        }

        
    }
}