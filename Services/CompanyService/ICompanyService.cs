using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_C.Dtos.Company;

namespace Project_C.Services.CompanyService
{
    public interface ICompanyService
    {
        Task<List<GetCompanyDto>> GetAllCompanies();
        Task<GetCompanyDto?> GetCompanyById(Guid id);
        Task<List<GetCompanyDto>> AddCompany(AddCompanyDto company);
    }
}