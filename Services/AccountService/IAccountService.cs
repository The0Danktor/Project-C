using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IAccountService
    {
        Task<List<GetDetailedUserDto>> GetAllUsers();
        Task<List<GetDetailedUserDto>> GetAllUsersByCompanyId();
        Task<List<GetSmallUserDto>> GetSmallusers();
    }
}