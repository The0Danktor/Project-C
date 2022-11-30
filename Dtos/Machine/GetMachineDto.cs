using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos.Machine
{
    public class GetMachineDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
    }
}