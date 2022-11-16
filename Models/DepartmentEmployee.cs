using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class DepartmentEmployee
    {
        public Guid EmployeeId { get; set; }
        public VisconEmployee Employee { get; set; } = null!;
        public Guid DepartmentId { get; set; }
        public Department Department { get; set; } = null!;
    }
}