using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetProblemWithSolutionDto
    {
        public Guid Id { get; set; }
        public Guid MachineId { get; set; }
        public string Description { get; set; } = null!;
        public List<string> Solutions { get; set; } = null!;
    }
}