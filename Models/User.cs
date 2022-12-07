using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Password { get; set; }
        public string Phone { get; set; } = null!;
        public Guid? CompanyId { get; set; }
        public Company? Company { get; set; }
        public Role Role { get; set; }
        public List<Ticket> Tickets { get; set; } = null!;
        public List<WorkingOnTicket> WorkingOnTickets { get; set; } = null!;
        public List<DepartmentEmployee> DepartmentEmployees { get; set; } = null!;
    }
}