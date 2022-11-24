using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class Department
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public List<Company> Companies { get; set; } = null!;
        public List<DepartmentEmployee> DepartmentEmployees { get; set; } = null!;
    }
}