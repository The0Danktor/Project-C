using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class MachineService : IMachineService
    {

        private readonly DataContext _context;

        public MachineService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<GetMachineDto>> AddMachine(AddMachineDto machine)
        {
            var newMachine = new Machine
            {
                Id = Guid.NewGuid(),
                Name = machine.Name,
                Tekennummer = machine.Tekennummer

            };
            _context.Machines.Add(newMachine);
            await _context.SaveChangesAsync();

            var _ = from m in _context.Machines
                    select new GetMachineDto
                    {
                        Id = m.Id,
                        Name = m.Name,
                        Tekennummer = m.Tekennummer
                    };
            return await _.ToListAsync();
        }

        public async Task<List<GetMachineDto>> GetAllMachines()
        {
            var query = from m in _context.Machines
                        select new GetMachineDto
                        {
                            Id = m.Id,
                            Name = m.Name,
                            Tekennummer = m.Tekennummer
                        };
            return await query.ToListAsync();
        }

        public async Task<List<GetMachineDto>> GetByCompanyId(Guid id)
        {
            var machines = from m in _context.Machines
                            join c in _context.CompanyMachines on m.Id equals c.MachineId
                            where c.CompanyId == id
                            select new GetMachineDto
                            {
                                Id = m.Id,
                                Name = m.Name,
                                Tekennummer = m.Tekennummer
                            };

            return await machines.ToListAsync();
        }

        public async Task<GetMachineDto?> GetMachineById(Guid id)
        {
            var machine = from m in _context.Machines
                          where m.Id == id
                          select new GetMachineDto
                          {
                              Id = m.Id,
                              Name = m.Name,
                              Tekennummer = m.Tekennummer
                          };
            return await machine.FirstOrDefaultAsync();
        }
    }

}