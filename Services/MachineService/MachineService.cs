using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_C.Dtos.Machine;

namespace Project_C.Services.MachineService
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

            };
            _context.Machines.Add(newMachine);
            await _context.SaveChangesAsync();
            
            var _ =from m in _context.Machines
                select new GetMachineDto
                {
                    Id = m.Id,
                    Name = m.Name
                };
            return _.ToList();
        }

        public async Task<List<GetMachineDto>> GetAllMachines()
        {
            var query = from m in _context.Machines
                       select new GetMachineDto
                       {
                           Id = m.Id,
                           Name = m.Name
                       };
            return query.ToList();
        }

        public async Task<GetMachineDto?> GetMachineById(Guid id)
        {
            var machine = from m in _context.Machines
                          where m.Id == id
                          select new GetMachineDto
                          {
                              Id = m.Id,
                              Name = m.Name
                          };
            return machine.FirstOrDefault();
        }
    }

}