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
    }
}