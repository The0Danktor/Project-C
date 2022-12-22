using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Password { get; set; }
        public string Phone { get; set; } = null!;
        public Guid CompanyId { get; set; }
        public Company Company { get; set; }  = null!;
        public bool Supervisor { get; set; }
        public List<Ticket> Tickets { get; set; } = null!;
    }
}