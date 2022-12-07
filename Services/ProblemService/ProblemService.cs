using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public class ProblemService : IProblemService
    {
        private readonly DataContext _context;

        public ProblemService(DataContext context)
        {
            _context = context;
        }
        
        public async Task<List<GetProblemDto>> AddProblem(AddProblemDto problem)
        {
            var newProblem = new Problem
            {
                Id = Guid.NewGuid(),
                MachineId = problem.MachineId,
                Description = problem.Description,
            };
            _context.Problems.Add(newProblem);
            await _context.SaveChangesAsync();
            var query = from p in _context.Problems
                select new GetProblemDto
                {
                    Id = p.Id,
                    MachineId = p.MachineId,
                    Description = p.Description,
                };
            return await query.ToListAsync();

        }

        public Task<List<GetProblemDto>> GetAllProblems()
        {
            var query = from p in _context.Problems
                select new GetProblemDto
                {
                    Id = p.Id,
                    MachineId = p.MachineId,
                    Description = p.Description,
                };
            return query.ToListAsync();
        }

        public async Task<GetProblemDto?> GetProblemById(Guid id)
        {


            var problem = from p in _context.Problems
                where p.Id == id
                select new GetProblemDto
                {
                    Id = p.Id,
                    MachineId = p.MachineId,
                    Description = p.Description,
                };
                
            return await problem.FirstOrDefaultAsync();
        }
    }
}