using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class CompanyMachine
    {
        [Key]
        public string Tekennummer { get; set; } = null!;
        public string Name { get; set; } = null!;
        public Guid CompanyId { get; set; }
        public Company Company { get; set; } = null!;
        public Guid MachineId { get; set; }
        public Machine Machine { get; set; } = null!;
        public Ticket Ticket { get; set; } = null!;
    }
}