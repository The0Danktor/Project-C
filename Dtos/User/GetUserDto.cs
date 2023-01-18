using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetUserDto
    {
        public GetUserDto(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
            Phone = user.Phone;
            CompanyId = user.CompanyId;
            Role = user.Role;
            ResetPassword = user.ResetPassword;
        }

        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public Guid? CompanyId { get; set; }
        public Role Role { get; set; }
        public bool ResetPassword { get; set; }
    
    }
}