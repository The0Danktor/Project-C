using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos.CompanyMachine
{
    public class AddCompanyMachineDto
    {
        public string Tekennummer { get; set; } = null!;
        public string Name { get; set; } = null!;
        public Guid CompanyId { get; set; }
        public Guid MachineId { get; set; }
    }
}