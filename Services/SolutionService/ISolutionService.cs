using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface ISolutionService
    {
        Task<List<GetSolutionDto>> GetAllSolutions();
        Task<GetSolutionDto?> GetSolutionById(Guid id);
        Task<List<GetSolutionDto>> AddSolution(AddSolutionDto solution);
    }
}