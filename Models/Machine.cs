using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Machine
    {
        public Guid Id { get; set; }
        public string Tekennummer { get; set; } = null!;
        public string Name { get; set; } = null!;
        public List<CompanyMachine> CompanyMachines { get; set; } = null!;
        public List<Problem> Problems { get; set; } = null!;
    }
}