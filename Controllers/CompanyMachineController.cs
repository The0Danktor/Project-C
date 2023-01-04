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
    public class CompanyMachineController : ControllerBase
    {
        
        private readonly ICompanyMachineService _companyMachineService;

        public CompanyMachineController(ICompanyMachineService companyMachineService)
        {
            _companyMachineService = companyMachineService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetCompanyMachineDto>>> GetAllCompanyMachines()
        {
            return Ok(await _companyMachineService.GetAllCompanyMachines());
        }

        [HttpGet("GetByCompanyId")]
        public async Task<ActionResult<List<GetCompanyMachineDto>>> GetCompanyMachinesByCompanyId()
        {
            return Ok(await _companyMachineService.GetCompanyMachinesByCompanyId());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetCompanyMachineDto>> GetCompanyMachineById(string id)
        {
            var result = await _companyMachineService.GetCompanyMachineById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost] [Authorize(Roles = "Viscon_employee")]
        public async Task<ActionResult<List<GetCompanyMachineDto>>> AddCompanyMachine(AddCompanyMachineDto companyMachine)
        {
            return Ok(await _companyMachineService.AddCompanyMachine(companyMachine));
        }


    }
}