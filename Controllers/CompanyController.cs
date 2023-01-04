using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")][Authorize]
    public class CompanyController : ControllerBase
    {
        
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetCompanyDto>>> GetAllCompanies()
        {
            return Ok(await _companyService.GetAllCompanies());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetCompanyDto>> GetCompanyById(Guid id)
        {
            var result = await _companyService.GetCompanyById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost] [Authorize(Roles="Viscon_employee")]
        public async Task<ActionResult<List<GetCompanyDto>>> AddCompany(AddCompanyDto company)
        {
            return Ok(await _companyService.AddCompany(company));
        }
    }
}