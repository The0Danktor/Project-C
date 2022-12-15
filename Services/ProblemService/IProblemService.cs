using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Services
{
    public interface IProblemService
    {
        Task<GetProblemDto?> GetProblemById(Guid id);
        Task<List<GetProblemDto>> GetAllProblems();
        Task<List<GetProblemDto>> AddProblem(AddProblemDto problem);
        Task<List<GetProblemWithSolutionDto>> GetProblemWithSolutionById(Guid id);
    }
}