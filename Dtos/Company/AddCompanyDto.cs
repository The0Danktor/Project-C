using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos.Company
{
    public class AddCompanyDto
    {
        public string Name { get; set; } = null!;
        public Guid DepartmentId { get; set; }
    }
}