using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class TicketService : ITicketService
    {
        private readonly DataContext _context;

        public TicketService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<GetTicketDto>> GetAllTickets()
        {
            var query = from x in _context.Tickets
                select new GetTicketDto
                {
                    Id = x.Id,
                    UserId = x.UserId,
                    CompanyMachineId = x.CompanyMachineId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note,
                    Date = x.Date,
                    Status = x.Status,
                    Priority = x.Priority
                };
            return await query.ToListAsync();
        }

        public async Task<GetTicketDto?> GetTicketById(Guid id)
        {
            var query = from x in _context.Tickets
                where x.Id == id
                select new GetTicketDto
                {
                    Id = x.Id,
                    UserId = x.UserId,
                    CompanyMachineId = x.CompanyMachineId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note,
                    Date = x.Date,
                    Status = x.Status,
                    Priority = x.Priority
                };
            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<GetTicketDto>> AddTicket(AddTicketDto ticket)
        {
            var newTicket = new Ticket
            {
                Id = Guid.NewGuid(),
                UserId = ticket.UserId,
                CompanyMachineId = ticket.CompanyMachineId,
                ProblemId = ticket.ProblemId,
                Tekennummer = ticket.Tekennummer,
                Note = ticket.Note,
                Date = ticket.Date,
                Status = ticket.Status,
                Priority = ticket.Priority
            };
            _context.Tickets.Add(newTicket);
            await _context.SaveChangesAsync();

            var query = from x in _context.Tickets
                select new GetTicketDto
                {
                    Id = x.Id,
                    UserId = x.UserId,
                    CompanyMachineId = x.CompanyMachineId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note,
                    Date = x.Date,
                    Status = x.Status,
                    Priority = x.Priority
                };
            return await query.ToListAsync();
        }
    }
}