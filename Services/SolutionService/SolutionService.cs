using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class SolutionService : ISolutionService
    {
        private readonly DataContext _context;

        public SolutionService(DataContext context)
        {
            _context = context;
        }
        public async Task<List<GetSolutionDto>> AddSolution(AddSolutionDto solution)
        {
            var newSolution = new Solutions
            {
                Id = Guid.NewGuid(),
                Description = solution.Description,
                ProblemId = solution.ProblemId
            };

            _context.Solutions.Add(newSolution);
           await _context.SaveChangesAsync();

            var query = from s in _context.Solutions
                select new GetSolutionDto
                {
                    Id = s.Id,
                    Description = s.Description,
                    ProblemId = s.ProblemId
                };
            return await query.ToListAsync();

        }

        public async Task<List<GetSolutionDto>> GetAllSolutions()
        {
            var query = from s in _context.Solutions
                select new GetSolutionDto
                {
                    Id = s.Id,
                    Description = s.Description,
                    ProblemId = s.ProblemId
                };
            
            return await query.ToListAsync();
        }

        public async Task<GetSolutionDto> GetSolutionById(Guid id)
        {
            var solution = from s in _context.Solutions
                where s.Id == id
                select new GetSolutionDto
                {
                    Id = s.Id,
                    Description = s.Description,
                    ProblemId = s.ProblemId
                };
            return await solution.FirstOrDefaultAsync();
        }
    }
}