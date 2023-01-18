using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Project_C.Services;

namespace Project_C.EF
{
    public class DataContext : DbContext
    {

        public DbSet<User> users { get; set; } = null!;
        public DbSet<Company> Companies { get; set; } = null!;
        public DbSet<Department> Departments { get; set; } = null!;
        public DbSet<DepartmentEmployee> DepartmentEmployees { get; set; } = null!;
        public DbSet<Machine> Machines { get; set; } = null!;
        public DbSet<CompanyMachine> CompanyMachines { get; set; } = null!;
        public DbSet<Problem> Problems { get; set; } = null!;
        public DbSet<Solutions> Solutions { get; set; } = null!;
        public DbSet<Ticket> Tickets { get; set; } = null!;
        public DbSet<WorkingOnTicket> WorkingOnTickets { get; set; } = null!;



        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            HashPassword("Admin", out byte[] passwordHash, out byte[] passwordSalt);
            modelBuilder.Entity<User>()
               .HasOne(c => c.Company)
               .WithMany(c => c.Users)
               .HasForeignKey(c => c.CompanyId);

            modelBuilder.Entity<Company>()
                .HasOne(c => c.Department)
                .WithMany(c => c.Companies)
                .HasForeignKey(c => c.DepartmentId);

            modelBuilder.Entity<CompanyMachine>()
                .HasOne(c => c.Company)
                .WithMany(c => c.CompanyMachines)
                .HasForeignKey(c => c.CompanyId);

            modelBuilder.Entity<CompanyMachine>()
                .HasOne(c => c.Machine)
                .WithMany(c => c.CompanyMachines)
                .HasForeignKey(c => c.MachineId);

            modelBuilder.Entity<Problem>()
                .HasOne(c => c.Machine)
                .WithMany(c => c.Problems)
                .HasForeignKey(c => c.MachineId);

            modelBuilder.Entity<Solutions>()
                .HasOne(c => c.Problem)
                .WithMany(c => c.Solutions)
                .HasForeignKey(c => c.ProblemId);

            modelBuilder.Entity<Ticket>(t => {
                t.HasOne(c => c.CompanyMachine)
                 .WithMany(c => c.Ticket)
                 .HasForeignKey(c => c.CompanyMachineId);
                
                t.HasOne(c => c.User)
                 .WithMany(c => c.Tickets)
                 .HasForeignKey(c => c.UserId);
            });

            modelBuilder.Entity<DepartmentEmployee>()
                .HasKey(c => new { c.EmployeeId, c.DepartmentId });

            modelBuilder.Entity<DepartmentEmployee>()
                .HasOne(c => c.Department)
                .WithMany(c => c.DepartmentEmployees)
                .HasForeignKey(c => c.DepartmentId);

            modelBuilder.Entity<DepartmentEmployee>()
                .HasOne(c => c.User)
                .WithMany(c => c.DepartmentEmployees)
                .HasForeignKey(c => c.EmployeeId);

            modelBuilder.Entity<WorkingOnTicket>()
                .HasKey(c => new { c.EmployeeId, c.TicketId });

            modelBuilder.Entity<WorkingOnTicket>()
                .HasOne(c => c.User)
                .WithMany(c => c.WorkingOnTickets)
                .HasForeignKey(c => c.EmployeeId);

            modelBuilder.Entity<WorkingOnTicket>()
                .HasOne(c => c.Ticket)
                .WithMany(c => c.WorkingOnTickets)
                .HasForeignKey(c => c.TicketId);

            var departmentId = Guid.Parse("9f7eda86-6364-4cec-9165-e560e50bb6e0");

            modelBuilder.Entity<Department>().HasData(
                new Department
                {
                    Id = departmentId,
                    Name = "IT",
                }
            );

            var company1Id = Guid.Parse("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb");
            var company2Id = Guid.Parse("523e4162-d992-46c2-a774-d831b8aa007c");
            var company3Id = Guid.Parse("4ef766d3-06cb-4ebd-8152-01498f38c5c2");

            modelBuilder.Entity<Company>().HasData(
                new Company
                {
                    Id = company1Id,
                    Name = "Evil Incorperated",
                    DepartmentId = departmentId
                },
                new Company
                {
                    Id = company2Id,
                    Name = "Good Incorperated",
                    DepartmentId = departmentId
                },
                new Company
                {
                    Id = company3Id,
                    Name = "Neutral Incorperated",
                    DepartmentId = departmentId
                }
            );

            var machines = new[]
            {
                new Machine
                {
                    Id = Guid.Parse("50188d9d-cd82-470f-a98d-d815e744e64f"),
                    Tekennummer = "5001483",
                    Name = "Satelliet shuttle"
                },
                new Machine
                {
                    Id = Guid.Parse("2d965a8b-b874-4066-a10e-d4c84a62afdb"),
                    Tekennummer = "5008716",
                    Name = "Transfer shuttle"
                },
                new Machine
                {
                    Id = Guid.Parse("b49f3dae-a99b-4aa6-ac95-c7ce664251db"),
                    Tekennummer = "5004914",
                    Name = "Lift"
                },
                new Machine
                {
                    Id = Guid.Parse("1b4f5865-c09e-4e6e-b064-39d40fcc982a"),
                    Tekennummer = "5007894",
                    Name = "Opzetpositie"
                },
                new Machine
                {
                    Id = Guid.Parse("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"),
                    Tekennummer = "5010754",
                    Name = "Kettingbaan"
                },
                new Machine
                {
                    Id = Guid.Parse("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"),
                    Tekennummer = "5004982",
                    Name = "Palletiseerder"
                },
                new Machine
                {
                    Id = Guid.Parse("e7b41288-5aa1-4839-9698-ebcb3623ea4d"),
                    Tekennummer = "7005318",
                    Name = "Voorstapelaar"
                }
            };
               
            modelBuilder.Entity<Machine>().HasData(machines);

            var companyMachineIds = new[]
            {
                Guid.Parse("12c775f8-8519-4026-ba68-bf537a705be4"),
                Guid.Parse("747688bb-efe1-48f0-97e2-c2d1304a6937"),
                Guid.Parse("ef698064-818f-4087-9219-f851dc99bc73"),
                Guid.Parse("f1e2d95c-28f1-4f1a-8869-eb5848569e0d"),
                Guid.Parse("7bf1c1b5-4e6c-4c64-8afa-3a6c9f7e645e"),
                Guid.Parse("b23c45bd-f115-44e3-a7a8-fea2f2dfd2a0"),
                Guid.Parse("8c704127-a9bf-421f-94c0-0ff9bafa576b")
            };

            // Add all machines to companies
            modelBuilder.Entity<CompanyMachine>().HasData(
                new CompanyMachine
                {
                    Id = companyMachineIds[0],
                    Name = machines[0].Name,
                    CompanyId = company1Id,
                    MachineId = machines[0].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[1],
                    Name = machines[1].Name,
                    CompanyId = company1Id,
                    MachineId = machines[1].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[2],
                    Name = machines[2].Name,
                    CompanyId = company1Id,
                    MachineId = machines[2].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[3],
                    Name = machines[3].Name,
                    CompanyId = company2Id,
                    MachineId = machines[3].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[4],
                    Name = machines[4].Name,
                    CompanyId = company2Id,
                    MachineId = machines[4].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[5],
                    Name = machines[5].Name,
                    CompanyId = company3Id,
                    MachineId = machines[5].Id
                },
                new CompanyMachine
                {
                    Id = companyMachineIds[6],
                    Name = machines[6].Name,
                    CompanyId = company3Id,
                    MachineId = machines[6].Id
                }
            );

            var problemIds = new[]
            {
                Guid.Parse("1bc3c350-d72e-4fb6-9a41-7899b8797135"),
                Guid.Parse("602c8e1a-2ccc-42f4-9698-713bdfbe328e"),
                Guid.Parse("43216e47-c66c-459d-b633-76d9043d0fce"),
                Guid.Parse("030acb51-2100-47d3-99c9-2e920360c67d"),
                Guid.Parse("5c2cb042-979d-4be1-a12e-98873145fdb2"),
                Guid.Parse("c58f310e-df55-483b-9372-3741ae27d788"),
                Guid.Parse("f6ea123c-c3e3-48f6-bf6f-271cefdbd734"),
                Guid.Parse("8b2942a0-bc67-4320-8a9b-38338ac172cb"),
                Guid.Parse("0c9d60f7-6e4c-4e09-88c0-9c0030070874")
            };

            var solutionIds = new[]
            {
                Guid.Parse("d1c14e9e-3727-4f07-b39a-09f6287eb3b2"),
                Guid.Parse("c7db4f37-9093-42ef-8649-9c0715d39fb4"),
                Guid.Parse("4f808a05-543d-424d-a5ee-d30ad9b64534"),
                Guid.Parse("10eb6942-c2c8-4d06-a776-d6c276c8c373"),
                Guid.Parse("9853d965-8a10-4630-9adf-9fa0d3827dea"),
                Guid.Parse("3d29a985-3d1a-4a71-aeae-f805ba191a3f"),
                Guid.Parse("f0404b74-3222-4563-8e6c-8278bc63905e"),
                Guid.Parse("b96ce683-8386-4045-8c3f-3b60fc664d82"),
                Guid.Parse("0ae4cdbc-ea79-4d21-9e4a-71ccbbe5e962")
            };

            modelBuilder.Entity<Problem>().HasData(
                new Problem
                {
                    Id = problemIds[0],
                    MachineId = machines[0].Id,
                    Description = "Product verkeerd op machine"
                },
                new Problem
                {
                    Id = problemIds[1],
                    MachineId = machines[0].Id,
                    Description = "Satteliet verkeer op machine"
                },
                new Problem
                {
                    Id = problemIds[2],
                    MachineId = machines[0].Id,
                    Description = "Geen verbinding met satelliet"
                },
                new Problem
                {
                    Id = problemIds[3],
                    MachineId = machines[0].Id,
                    Description = "Niet veilig om te bewegen"
                },
                new Problem
                {
                    Id = problemIds[4],
                    MachineId = machines[1].Id,
                    Description = "Laden/lossen duurt te lang"
                },
                new Problem
                {
                    Id = problemIds[5],
                    MachineId = machines[1].Id,
                    Description = "Niet veilig om te bewegen"
                },
                new Problem
                {
                    Id = problemIds[6],
                    MachineId = machines[2].Id,
                    Description = "Laden/lossen duurt te lang"
                },
                new Problem
                {
                    Id = problemIds[7],
                    MachineId = machines[2].Id,
                    Description = "Niet veilig om te bewegen"
                },
                new Problem
                {
                    Id = problemIds[8],
                    MachineId = machines[4].Id,
                    Description = "Laden/lossen duurt te lang"
                }
            );

            modelBuilder.Entity<Solutions>().HasData(
                new Solutions
                {
                    Id = solutionIds[0],
                    ProblemId = problemIds[0],
                    Description = "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen"
                },
                new Solutions
                {
                    Id = solutionIds[1],
                    ProblemId = problemIds[1],
                    Description = "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen"
                },
                new Solutions
                {
                    Id = solutionIds[2],
                    ProblemId = problemIds[2],
                    Description = "Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle"
                },
                new Solutions
                {
                    Id = solutionIds[3],
                    ProblemId = problemIds[3],
                    Description = "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie"
                },
                new Solutions
                {
                    Id = solutionIds[4],
                    ProblemId = problemIds[4],
                    Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de shuttle en voer recovery uit in VLC"
                },
                new Solutions
                {
                    Id = solutionIds[5],
                    ProblemId = problemIds[5],
                    Description = "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie"
                },
                new Solutions
                {
                    Id = solutionIds[6],
                    ProblemId = problemIds[6],
                    Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de vt en voer recovery uit in VLC"
                },
                new Solutions
                {
                    Id = solutionIds[7],
                    ProblemId = problemIds[7],
                    Description = "De pallet steekt uit op de lift of een andere pallet langs de liftschacht. Draai de pallet handmatig op de juiste positie"
                },
                new Solutions
                {
                    Id = solutionIds[8],
                    ProblemId = problemIds[8],
                    Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan"
                }
            );

            var userId = Guid.Parse("ff094bc3-afc2-4a68-9cdf-8fd532c944ee");
            HashPassword("password", out byte[] userPassHash, out byte[] userPassSalt);

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = Guid.Parse("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                    Name = "Admin",
                    Email = "Admin@admin.com",
                    Phone = "12345678",
                    passwordHash = Convert.ToBase64String(passwordHash),
                    passwordSalt = Convert.ToBase64String(passwordSalt),
                    Role = Role.Viscon_admin,
                },
                new User
                {
                    Id = userId,
                    Name = "Evil Incorperated Admin",
                    Email = "admin@evil.inc",
                    passwordHash = Convert.ToBase64String(userPassHash),
                    passwordSalt = Convert.ToBase64String(userPassSalt),
                    Phone = "0666666666",
                    CompanyId = company1Id,
                    Role = Role.Client_admin
                }
            );
        }
        public void HashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

    }

}
