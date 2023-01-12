using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class CompanyMachineService : ICompanyMachineService
    {
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public CompanyMachineService(DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }
        public async Task<List<GetCompanyMachineDto>> AddCompanyMachine(AddCompanyMachineDto companyMachine)
        {
            var newCompanyMachine = new CompanyMachine
            {
                Id = new Guid(),
                Name = companyMachine.Name,
                CompanyId = companyMachine.CompanyId,
                MachineId = companyMachine.MachineId,
            };
            _context.CompanyMachines.Add(newCompanyMachine);
            await _context.SaveChangesAsync();
            var _ = from cm in _context.CompanyMachines
                    join m in _context.Machines on cm.MachineId equals m.Id
                    select new GetCompanyMachineDto
                    {
                        Id = cm.Id,
                        Name = cm.Name,
                        CompanyId = cm.CompanyId,
                        MachineId = cm.MachineId,
                        Type = m.Name
                    };
            return await _.ToListAsync();
        }

        public async Task<List<GetCompanyMachineDto>> GetAllCompanyMachines()
        {
            var query = from cm in _context.CompanyMachines
                        join m in _context.Machines on cm.MachineId equals m.Id
                        select new GetCompanyMachineDto
                        {
                            Id = cm.Id,
                            Name = cm.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.ToListAsync();
        }

        public async Task<List<GetCompanyMachineDto>?> GetCompanyMachinesByCompanyId()
        {
            var userId = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.Sid);
            if (userId == null) return null;
            var user = await _context.users.FindAsync(Guid.Parse(userId));
            if (user == null) return null;
            var query = from cm in _context.CompanyMachines
                        join m in _context.Machines on cm.MachineId equals m.Id
                        where cm.CompanyId == user.CompanyId
                        select new GetCompanyMachineDto
                        {
                            Id = cm.Id,
                            Name = cm.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.ToListAsync();
        }

        public async Task<GetCompanyMachineDto?> GetCompanyMachineById(Guid Id)
        {
            var query = from cm in _context.CompanyMachines
                        join m in _context.Machines on cm.MachineId equals m.Id
                        where cm.Id == Id
                        select new GetCompanyMachineDto
                        {
                            Id = cm.Id,
                            Name = m.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.FirstOrDefaultAsync();
        }
    }
}