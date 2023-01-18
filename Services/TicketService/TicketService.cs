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
                    Tekennummer = x.Tekennummer,
                    ProblemId = x.ProblemId,
                    ProblemDescription = x.ProblemDescription,
                    Images = x.Images,
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
            var companyMachine = await _context.CompanyMachines.FirstOrDefaultAsync(x => x.MachineId == ticket.MachineId);

            var newTicket = new Ticket
            {
                Id = Guid.NewGuid(),
                UserId = ticket.UserId,
                CompanyMachineId = companyMachine!.Id,
                Tekennummer = ticket.Tekennummer,
                ProblemId = ticket.ProblemId,
                ProblemDescription = ticket.ProblemDescription,
                Images = ticket.Images,
                Note = ticket.Note,
                Date = DateTime.Now.ToUniversalTime(),
                Status = "Pending",
                Priority = "Low"
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