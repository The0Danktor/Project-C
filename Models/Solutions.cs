using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Solutions
    {
        public Guid Id { get; set; }
        public Guid ProblemId { get; set; }
        public Problem Problem { get; set; } = null!;
        public string Description { get; set; } = null!;
    }
}