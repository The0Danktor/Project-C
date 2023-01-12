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
                    CustomerId = x.CustomerId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note
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
                    CustomerId = x.CustomerId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note
                };
            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<GetTicketDto>> AddTicket(AddTicketDto ticket)
        {
            var newTicket = new Ticket
            {
                Id = Guid.NewGuid(),
                CustomerId = ticket.CustomerId,
                ProblemId = ticket.ProblemId,
                Tekennummer = ticket.Tekennummer,
                Note = ticket.Note
            };
            _context.Tickets.Add(newTicket);
            await _context.SaveChangesAsync();

            var query = from x in _context.Tickets
                select new GetTicketDto
                {
                    Id = x.Id,
                    CustomerId = x.CustomerId,
                    ProblemId = x.ProblemId,
                    Tekennummer = x.Tekennummer,
                    Note = x.Note
                };
            return await query.ToListAsync();
        }
    }
}