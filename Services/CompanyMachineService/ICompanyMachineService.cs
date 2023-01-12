using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface ICompanyMachineService
    {
        Task<List<GetCompanyMachineDto>> AddCompanyMachine(AddCompanyMachineDto companyMachine);
        Task<List<GetCompanyMachineDto>> GetAllCompanyMachines();
        Task<List<GetCompanyMachineDto>?> GetCompanyMachinesByCompanyId();
        Task<GetCompanyMachineDto?> GetCompanyMachineById(Guid Id);
    }
}