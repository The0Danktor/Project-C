using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CompanyService(DataContext context , IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }
        public async Task<List<GetCompanyDto>> AddCompany(AddCompanyDto company)
        {
            var newcompany = new Company
            {
                Id = Guid.NewGuid(),
                Name = company.Name,
                DepartmentId = company.DepartmentId
            };
            _context.Companies.Add(newcompany);
            await _context.SaveChangesAsync();
            
            var _ = from c in _context.Companies
                    select new GetCompanyDto
                    {
                        Id = c.Id,
                        Name = c.Name,
                        DepartmentId = c.DepartmentId
                    };
            return await _.ToListAsync();
        }

        public async Task<List<GetCompanyDto>> GetAllCompanies()
        {
            var query = from c in _context.Companies
                        select new GetCompanyDto
                        {
                            Id = c.Id,
                            Name = c.Name,
                            DepartmentId = c.DepartmentId
                        };
            return (await query.ToListAsync());           
        }

        public async Task<GetCompanyDto?> GetCompanyById(Guid id)
        {
            var company = from c in _context.Companies
                          where c.Id == id
                          select new GetCompanyDto
                          {
                              Id = c.Id,
                              Name = c.Name,
                              DepartmentId = c.DepartmentId
                          };
            return await company.FirstOrDefaultAsync();
        }

        public async Task<List<GetCompanyDto>?> AddCompanyViscon(AddCompanyVisconDto company)
        {
             var userId = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Sid);
            if (userId == null) return null;
            var departmentId  = from de in _context.DepartmentEmployees
                                where de.EmployeeId == Guid.Parse(userId)
                                select de.DepartmentId;
            
            
            var newcompany = new Company
            {
                Id = Guid.NewGuid(),
                Name = company.Name,
                DepartmentId = departmentId.FirstOrDefault()
            };
            _context.Companies.Add(newcompany);
            await _context.SaveChangesAsync();
            var _ = from c in _context.Companies
                    select new GetCompanyDto
                    {
                        Id = c.Id,
                        Name = c.Name,
                        DepartmentId = c.DepartmentId
                    };
            return await _.ToListAsync();

        }
    }
}