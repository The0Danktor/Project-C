using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class AccountService : IAccountService
    {

        private readonly DataContext _context;
        public AccountService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<GetDetailedUserDto>> GetAllUsers()
        {
            var users = from user in _context.users
                        where user.Role == Role.Viscon_admin || user.Role == Role.Viscon_employee
                        join DE in _context.DepartmentEmployees on user.Id equals DE.EmployeeId
                        join department in _context.Departments on DE.DepartmentId equals department.Id
                        select new GetDetailedUserDto
                        {
                            Id = user.Id,
                            Name = user.Name,
                            Email = user.Email,
                            Phone = user.Phone,
                            CompanyDepartment = department.Name,
                            Role = user.Role
                        };

            var users2 = from user in _context.users
                         where user.Role == Role.Client_admin
                         join company in _context.Companies on user.CompanyId equals company.Id
                         select new GetDetailedUserDto
                         {
                             Id = user.Id,
                             Name = user.Name,
                             Email = user.Email,
                             Phone = user.Phone,
                             CompanyDepartment = company.Name,
                             Role = user.Role
                         };

            // add the to user lists to one new list
            users = users.Concat(users2);
            return await users.ToListAsync();
        }

        public async Task<List<GetSmallUserDto>> GetSmallusers()
        {
            var users = from user in _context.users
                        where user.Role == Role.Viscon_admin || user.Role == Role.Viscon_employee
                        select new GetSmallUserDto
                        {
                            Id = user.Id,
                            Name = user.Name,
                        };
            
            return await users.ToListAsync();
        }

        public Task<List<GetDetailedUserDto>> GetAllUsersByCompanyId()
        {
            throw new NotImplementedException();
        }
    }
}