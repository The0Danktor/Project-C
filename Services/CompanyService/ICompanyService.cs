using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface ICompanyService
    {
        Task<List<GetCompanyDto>> GetAllCompanies();
        Task<GetCompanyDto?> GetCompanyById(Guid id);
        Task<List<GetCompanyDto>> AddCompany(AddCompanyDto company);
    }
}