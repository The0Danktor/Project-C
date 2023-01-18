using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project_C.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<List<GetTicketDto>>> GetAllTickets()
        {
            return Ok(await _ticketService.GetAllTickets());
        }

        [HttpGet("GetAllByCompany/{userId}")]
        public async Task<ActionResult<List<GetTicketDto>>> GetByCompany(string userId)
        {
            return Ok(await _ticketService.GetByCompany(Guid.Parse(userId)));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetTicketDto>> GetTicketById(Guid id)
        {
            var query = await _ticketService.GetTicketById(id);
            
            if (query == null) 
            {
                return NotFound();
            }
            return Ok(query);
            
        }

        [HttpPost]
        public async Task<ActionResult<List<GetTicketDto>>> AddTicket(AddTicketDto ticket)
        {
            return Ok(await _ticketService.AddTicket(ticket));
        }
    }
}