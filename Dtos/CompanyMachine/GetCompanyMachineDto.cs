using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetCompanyMachineDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public Guid CompanyId { get; set; }
        public Guid MachineId { get; set; }
        public string Type { get; set; } = null!;
    }
}