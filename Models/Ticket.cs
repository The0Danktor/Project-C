using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Ticket
    {
        
        public Guid Id { get; set; }
        public Guid CustomerId { get; set; }
        public User User { get; set; } = null!;
        public string Tekennummer { get; set; } = null!;
        public CompanyMachine CompanyMachine { get; set; } = null!;
        public Guid ProblemId { get; set; }
        public Problem Problem { get; set; } = null!;
        public string Note { get; set; } = null!;
        public List<WorkingOnTicket> WorkingOnTickets { get; set; } = null!;
    }
}