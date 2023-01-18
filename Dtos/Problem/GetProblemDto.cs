using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetProblemDto
    {
        public GetProblemDto(Problem problem)
        {
            Id = problem.Id;
            MachineId = problem.MachineId;
            Description = problem.Description;
        }

        public Guid Id { get; set; }
        public Guid MachineId { get; set; }
        public string Description { get; set; } = null!;
    }
}