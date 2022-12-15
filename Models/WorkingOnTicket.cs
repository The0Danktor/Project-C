using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class WorkingOnTicket
    {
        public Guid EmployeeId { get; set; }
        public User User { get; set; } = null!;
        public Guid TicketId { get; set; }
        public Ticket Ticket { get; set; } = null!;
    }
}