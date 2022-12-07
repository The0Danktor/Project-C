using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetSolutionDto
    {
        public Guid Id { get; set; }
        public Guid ProblemId { get; set; }
        public string Description { get; set; } = null!;
    }
}