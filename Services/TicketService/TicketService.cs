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
            return await _context.Tickets.Select(x => new GetTicketDto(x)).ToListAsync();
        }

        public async Task<List<GetTicketDto>> GetByCompany(Guid userId)
        {
            var user = await _context.users.FirstOrDefaultAsync(x => x.Id == userId);
            if (user == null)
                return new List<GetTicketDto>();
            
            var company = await _context.Companies.FirstOrDefaultAsync(x => x.Id == user.CompanyId);
            if (company == null)
                return new List<GetTicketDto>();
            
            var query = from x in _context.Tickets
                where x.User.CompanyId == company.Id
                select new GetTicketDto(x);
            
            return await query.ToListAsync();
        }

        public async Task<GetTicketDto?> GetTicketById(Guid id)
        {
            var query = from x in _context.Tickets
                where x.Id == id
                select new GetTicketDto(x);
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

            return await this.GetAllTickets();
        }
    }
}