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
    [Authorize (Roles = "Viscon_employee")]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetDepartmentDto>>> GetAllDepartments()
        {
            var departments = await _departmentService.GetAllDepartments();
            return Ok(departments);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetDepartmentDto>> GetDepartmentById(Guid id)
        {
            var department = await _departmentService.GetDepartmentById(id);
            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

        [HttpPost] [Authorize(Roles = "Viscon_admin")]
        public async Task<ActionResult<List<GetDepartmentDto>>> AddDepartment(AddDepartmentDto department)
        {
            var newDepartment = await _departmentService.AddDepartment(department);
            return Ok(newDepartment);
        }
    }
}