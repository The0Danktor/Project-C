using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Problem
    {
        public Guid Id { get; set; }
        public Guid MachineId { get; set; }
        public Machine Machine { get; set; } = null!;
        public string Description { get; set; } = null!;
        public List<Solutions> Solutions { get; set; } = null!;
        public Ticket ticket { get; set; } = null!;
    }
}