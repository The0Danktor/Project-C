using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_C.Dtos.CompanyMachine;

namespace Project_C.Services.CompanyMachineService
{
    public interface ICompanyMachineService
    {
        Task<List<GetCompanyMachineDto>> AddCompanyMachine(AddCompanyMachineDto companyMachine);
        Task<List<GetCompanyMachineDto>> GetAllCompanyMachines();
        Task<GetCompanyMachineDto?> GetCompanyMachineById(string tekennummer);
    }
}