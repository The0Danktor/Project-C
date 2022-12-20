using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface ITicketService
    {
        Task<List<GetTicketDto>> GetAllTickets();
        Task<GetTicketDto?> GetTicketById(Guid id);
        Task<List<GetTicketDto>> AddTicket(AddTicketDto ticket);
    }
}