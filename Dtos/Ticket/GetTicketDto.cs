using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Dtos
{
    public class GetTicketDto
    {
        public GetTicketDto(Ticket ticket)
        {
            Id = ticket.Id;
            UserId = ticket.UserId;
            CompanyMachineId = ticket.CompanyMachineId;
            Tekennummer = ticket.Tekennummer;
            ProblemId = ticket.ProblemId;
            ProblemDescription = ticket.ProblemDescription;
            Images = ticket.Images;
            Note = ticket.Note;
            Date = ticket.Date;
            Status = ticket.Status;
            Priority = ticket.Priority;
        }

        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid? CompanyMachineId { get; set; }
        public string? Tekennummer { get; set; } = null!;
        public Guid? ProblemId { get; set; }
        public string? ProblemDescription { get; set; } = null!;
        public List<string> Images { get; set; } = null!;
        public string Note { get; set; } = null!;
        public DateTime Date { get; set; }
        public string Status { get; set; } = null!;
        public string Priority { get; set; } = null!;
    }
}