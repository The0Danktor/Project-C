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
        private readonly IMachineService _machineService;

        public MachineController(IMachineService machineService)
        {
            _machineService = machineService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetMachineDto>>> Get()
        {
           return Ok(await _machineService.GetAllMachines());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetMachineDto>> Get(Guid id)
        {
            var result = await _machineService.GetMachineById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<List<GetMachineDto>>> Post(AddMachineDto machine)
        {
            return Ok(await _machineService.AddMachine(machine));
        }

        
    }
}