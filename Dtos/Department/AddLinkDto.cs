using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class AddLinkDto
    {
        public Guid EmployeeId { get; set; }
        public Guid DepartmentId { get; set; }
    }
}