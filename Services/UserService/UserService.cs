namespace Project_C.Services
{
    public class UserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public async Task<GetUserDto?> Get(Guid id)
        {
            var user = await _context.users.FindAsync(id);
            if (user == null) return null;
            return new GetUserDto(user);
        }

        public async Task<IEnumerable<GetUserDto>> GetByCompany(Guid companyId)
        {
            var users = await _context.users.Where(u => u.CompanyId == companyId).ToListAsync();
            return users.Select(u => new GetUserDto(u));
        }
    }
}