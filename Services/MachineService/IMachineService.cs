using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project_C.Dtos.Machine;

namespace Project_C.Services
{
    public interface IMachineService
    {
        Task<List<GetMachineDto>> GetAllMachines();
        Task<GetMachineDto?> GetMachineById(Guid id);
        Task<List<GetMachineDto>> AddMachine(AddMachineDto machine);

    }
}