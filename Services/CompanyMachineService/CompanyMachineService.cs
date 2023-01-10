using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class CompanyMachineService : ICompanyMachineService
    {
        private readonly DataContext _context;
        public CompanyMachineService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<GetCompanyMachineDto>> AddCompanyMachine(AddCompanyMachineDto companyMachine)
        {
            var newCompanyMachine = new CompanyMachine
            {
                Name = companyMachine.Name,
                CompanyId = companyMachine.CompanyId,
                MachineId = companyMachine.MachineId,
                Tekennummer = companyMachine.Tekennummer
            };
            _context.CompanyMachines.Add(newCompanyMachine);
            await _context.SaveChangesAsync();
            var _ = from cm in _context.CompanyMachines
                    join m in _context.Machines on cm.MachineId equals m.Id
                    select new GetCompanyMachineDto
                    {
                        Name = cm.Name,
                        CompanyId = cm.CompanyId,
                        MachineId = cm.MachineId,
                        Tekennummer = cm.Tekennummer,
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
                            Tekennummer = cm.Tekennummer,
                            Name = cm.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.ToListAsync();
        }

        public async Task<List<GetCompanyMachineDto>> GetCompanyMachinesByCompanyId(Guid id)
        {
            var query = from cm in _context.CompanyMachines
                        join m in _context.Machines on cm.MachineId equals m.Id
                        where cm.CompanyId == id
                        select new GetCompanyMachineDto
                        {
                            Tekennummer = cm.Tekennummer,
                            Name = cm.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.ToListAsync();
        }

        public async Task<GetCompanyMachineDto?> GetCompanyMachineById(string Tekennummer)
        {
            var query = from cm in _context.CompanyMachines
                        join m in _context.Machines on cm.MachineId equals m.Id
                        where cm.Tekennummer == Tekennummer
                        select new GetCompanyMachineDto
                        {
                            Tekennummer = cm.Tekennummer,
                            Name = m.Name,
                            CompanyId = cm.CompanyId,
                            MachineId = m.Id,
                            Type = m.Name
                        };
            return await query.FirstOrDefaultAsync();
        }
    }
}