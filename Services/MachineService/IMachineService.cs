using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IMachineService
    {
        Task<List<GetMachineDto>> GetAllMachines();
        Task<List<GetMachineDto>> GetByCompanyId(Guid id);
        Task<GetMachineDto?> GetMachineById(Guid id);
        Task<List<GetMachineDto>> AddMachine(AddMachineDto machine);

    }
}