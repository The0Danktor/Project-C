using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IDepartmentService
    {

        Task<List<GetDepartmentDto>> GetAllDepartments();
        Task<GetDepartmentDto?> GetDepartmentById(Guid id);
        Task<List<GetDepartmentDto>> AddDepartment(AddDepartmentDto department);
        
    }
}