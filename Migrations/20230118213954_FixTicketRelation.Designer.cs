﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Project_C.EF;

#nullable disable

namespace Project_C.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230118213954_FixTicketRelation")]
    partial class FixTicketRelation
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Project_C.Models.Company", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("DepartmentId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.ToTable("Companies");

                    b.HasData(
                        new
                        {
                            Id = new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"),
                            DepartmentId = new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"),
                            Name = "Evil Incorperated"
                        },
                        new
                        {
                            Id = new Guid("523e4162-d992-46c2-a774-d831b8aa007c"),
                            DepartmentId = new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"),
                            Name = "Good Incorperated"
                        },
                        new
                        {
                            Id = new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"),
                            DepartmentId = new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"),
                            Name = "Neutral Incorperated"
                        });
                });

            modelBuilder.Entity("Project_C.Models.CompanyMachine", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("CompanyId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("MachineId")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("MachineId");

                    b.ToTable("CompanyMachines");

                    b.HasData(
                        new
                        {
                            Id = new Guid("12c775f8-8519-4026-ba68-bf537a705be4"),
                            CompanyId = new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"),
                            MachineId = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f"),
                            Name = "Satelliet shuttle"
                        },
                        new
                        {
                            Id = new Guid("747688bb-efe1-48f0-97e2-c2d1304a6937"),
                            CompanyId = new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"),
                            MachineId = new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb"),
                            Name = "Transfer shuttle"
                        },
                        new
                        {
                            Id = new Guid("ef698064-818f-4087-9219-f851dc99bc73"),
                            CompanyId = new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"),
                            MachineId = new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db"),
                            Name = "Lift"
                        },
                        new
                        {
                            Id = new Guid("f1e2d95c-28f1-4f1a-8869-eb5848569e0d"),
                            CompanyId = new Guid("523e4162-d992-46c2-a774-d831b8aa007c"),
                            MachineId = new Guid("1b4f5865-c09e-4e6e-b064-39d40fcc982a"),
                            Name = "Opzetpositie"
                        },
                        new
                        {
                            Id = new Guid("7bf1c1b5-4e6c-4c64-8afa-3a6c9f7e645e"),
                            CompanyId = new Guid("523e4162-d992-46c2-a774-d831b8aa007c"),
                            MachineId = new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"),
                            Name = "Kettingbaan"
                        },
                        new
                        {
                            Id = new Guid("b23c45bd-f115-44e3-a7a8-fea2f2dfd2a0"),
                            CompanyId = new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"),
                            MachineId = new Guid("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"),
                            Name = "Palletiseerder"
                        },
                        new
                        {
                            Id = new Guid("8c704127-a9bf-421f-94c0-0ff9bafa576b"),
                            CompanyId = new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"),
                            MachineId = new Guid("e7b41288-5aa1-4839-9698-ebcb3623ea4d"),
                            Name = "Voorstapelaar"
                        });
                });

            modelBuilder.Entity("Project_C.Models.Department", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Departments");

                    b.HasData(
                        new
                        {
                            Id = new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"),
                            Name = "IT"
                        });
                });

            modelBuilder.Entity("Project_C.Models.DepartmentEmployee", b =>
                {
                    b.Property<Guid>("EmployeeId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("DepartmentId")
                        .HasColumnType("uuid");

                    b.HasKey("EmployeeId", "DepartmentId");

                    b.HasIndex("DepartmentId");

                    b.ToTable("DepartmentEmployees");
                });

            modelBuilder.Entity("Project_C.Models.Machine", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Tekennummer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Machines");

                    b.HasData(
                        new
                        {
                            Id = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f"),
                            Name = "Satelliet shuttle",
                            Tekennummer = "5001483"
                        },
                        new
                        {
                            Id = new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb"),
                            Name = "Transfer shuttle",
                            Tekennummer = "5008716"
                        },
                        new
                        {
                            Id = new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db"),
                            Name = "Lift",
                            Tekennummer = "5004914"
                        },
                        new
                        {
                            Id = new Guid("1b4f5865-c09e-4e6e-b064-39d40fcc982a"),
                            Name = "Opzetpositie",
                            Tekennummer = "5007894"
                        },
                        new
                        {
                            Id = new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"),
                            Name = "Kettingbaan",
                            Tekennummer = "5010754"
                        },
                        new
                        {
                            Id = new Guid("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"),
                            Name = "Palletiseerder",
                            Tekennummer = "5004982"
                        },
                        new
                        {
                            Id = new Guid("e7b41288-5aa1-4839-9698-ebcb3623ea4d"),
                            Name = "Voorstapelaar",
                            Tekennummer = "7005318"
                        });
                });

            modelBuilder.Entity("Project_C.Models.Problem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("MachineId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("MachineId");

                    b.ToTable("Problems");

                    b.HasData(
                        new
                        {
                            Id = new Guid("1bc3c350-d72e-4fb6-9a41-7899b8797135"),
                            Description = "Product verkeerd op machine",
                            MachineId = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f")
                        },
                        new
                        {
                            Id = new Guid("602c8e1a-2ccc-42f4-9698-713bdfbe328e"),
                            Description = "Satteliet verkeer op machine",
                            MachineId = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f")
                        },
                        new
                        {
                            Id = new Guid("43216e47-c66c-459d-b633-76d9043d0fce"),
                            Description = "Geen verbinding met satelliet",
                            MachineId = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f")
                        },
                        new
                        {
                            Id = new Guid("030acb51-2100-47d3-99c9-2e920360c67d"),
                            Description = "Niet veilig om te bewegen",
                            MachineId = new Guid("50188d9d-cd82-470f-a98d-d815e744e64f")
                        },
                        new
                        {
                            Id = new Guid("5c2cb042-979d-4be1-a12e-98873145fdb2"),
                            Description = "Laden/lossen duurt te lang",
                            MachineId = new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb")
                        },
                        new
                        {
                            Id = new Guid("c58f310e-df55-483b-9372-3741ae27d788"),
                            Description = "Niet veilig om te bewegen",
                            MachineId = new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb")
                        },
                        new
                        {
                            Id = new Guid("f6ea123c-c3e3-48f6-bf6f-271cefdbd734"),
                            Description = "Laden/lossen duurt te lang",
                            MachineId = new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db")
                        },
                        new
                        {
                            Id = new Guid("8b2942a0-bc67-4320-8a9b-38338ac172cb"),
                            Description = "Niet veilig om te bewegen",
                            MachineId = new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db")
                        },
                        new
                        {
                            Id = new Guid("0c9d60f7-6e4c-4e09-88c0-9c0030070874"),
                            Description = "Laden/lossen duurt te lang",
                            MachineId = new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46")
                        });
                });

            modelBuilder.Entity("Project_C.Models.Solutions", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("ProblemId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("ProblemId");

                    b.ToTable("Solutions");

                    b.HasData(
                        new
                        {
                            Id = new Guid("d1c14e9e-3727-4f07-b39a-09f6287eb3b2"),
                            Description = "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen",
                            ProblemId = new Guid("1bc3c350-d72e-4fb6-9a41-7899b8797135")
                        },
                        new
                        {
                            Id = new Guid("c7db4f37-9093-42ef-8649-9c0715d39fb4"),
                            Description = "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen",
                            ProblemId = new Guid("602c8e1a-2ccc-42f4-9698-713bdfbe328e")
                        },
                        new
                        {
                            Id = new Guid("4f808a05-543d-424d-a5ee-d30ad9b64534"),
                            Description = "Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle",
                            ProblemId = new Guid("43216e47-c66c-459d-b633-76d9043d0fce")
                        },
                        new
                        {
                            Id = new Guid("10eb6942-c2c8-4d06-a776-d6c276c8c373"),
                            Description = "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie",
                            ProblemId = new Guid("030acb51-2100-47d3-99c9-2e920360c67d")
                        },
                        new
                        {
                            Id = new Guid("9853d965-8a10-4630-9adf-9fa0d3827dea"),
                            Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de shuttle en voer recovery uit in VLC",
                            ProblemId = new Guid("5c2cb042-979d-4be1-a12e-98873145fdb2")
                        },
                        new
                        {
                            Id = new Guid("3d29a985-3d1a-4a71-aeae-f805ba191a3f"),
                            Description = "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie",
                            ProblemId = new Guid("c58f310e-df55-483b-9372-3741ae27d788")
                        },
                        new
                        {
                            Id = new Guid("f0404b74-3222-4563-8e6c-8278bc63905e"),
                            Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de vt en voer recovery uit in VLC",
                            ProblemId = new Guid("f6ea123c-c3e3-48f6-bf6f-271cefdbd734")
                        },
                        new
                        {
                            Id = new Guid("b96ce683-8386-4045-8c3f-3b60fc664d82"),
                            Description = "De pallet steekt uit op de lift of een andere pallet langs de liftschacht. Draai de pallet handmatig op de juiste positie",
                            ProblemId = new Guid("8b2942a0-bc67-4320-8a9b-38338ac172cb")
                        },
                        new
                        {
                            Id = new Guid("0ae4cdbc-ea79-4d21-9e4a-71ccbbe5e962"),
                            Description = "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan",
                            ProblemId = new Guid("0c9d60f7-6e4c-4e09-88c0-9c0030070874")
                        });
                });

            modelBuilder.Entity("Project_C.Models.Ticket", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("CompanyMachineId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp with time zone");

                    b.Property<List<string>>("Images")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("Note")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Priority")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProblemDescription")
                        .HasColumnType("text");

                    b.Property<Guid?>("ProblemId")
                        .HasColumnType("uuid");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Tekennummer")
                        .HasColumnType("text");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("CompanyMachineId");

                    b.HasIndex("ProblemId")
                        .IsUnique();

                    b.HasIndex("UserId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("Project_C.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("CompanyId")
                        .HasColumnType("uuid");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("ResetPassword")
                        .HasColumnType("boolean");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.Property<string>("passwordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("passwordSalt")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("users");

                    b.HasData(
                        new
                        {
                            Id = new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                            Email = "Admin@admin.com",
                            Name = "Admin",
                            Phone = "12345678",
                            ResetPassword = false,
                            Role = 4,
                            passwordHash = "1dmAm5s0mWmRN7PimGG+kdRUHHFk6sUhBPRRhcOHIHZsQ25xVecDf+Anq5sYwfcpcjAKocPmJ/maoLyZpoQFqw==",
                            passwordSalt = "xZsjABAKNPtlb6ftI2bfWgy8iPhLh2yCZNyPZT7LFjN8CpofcH6s0eRVK6EsMtIbe/Zyuft9wCWMGAKKa/gT3h6YautV2EGJgt5Ew8j/+DhAaOhUdDDOR65O5mWkGnsZBSy9aEo/x+vSnwRcN2pxJ5uTli7kG/owaHCZMF5N0jM="
                        },
                        new
                        {
                            Id = new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                            CompanyId = new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"),
                            Email = "admin@evil.inc",
                            Name = "Evil Incorperated Admin",
                            Phone = "0666666666",
                            ResetPassword = false,
                            Role = 2,
                            passwordHash = "dn433gzuOULOmaw35rHY+H1voC96W1tMP+YNbgNXhk8xPWYy8ZALwQLXYRf6wByMaBx0Ol0WQO/1A2VgucQqoQ==",
                            passwordSalt = "1DZPFzP6BNY4D/L2+titzqQvaWRbFJ8ncuYRW7TkV6+gq4A5xSdU0dZngv2Ys/OwiMb+wKhVP6reWksEwwnr8kX71LiHPVjxR1CnnGg1RJTZw5cIH5o0ndSsNkAbBIJISGu0coebgoD5EMq9E8fkUfxUQRRF9QWOiVjCS0ga59c="
                        });
                });

            modelBuilder.Entity("Project_C.Models.WorkingOnTicket", b =>
                {
                    b.Property<Guid>("EmployeeId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("TicketId")
                        .HasColumnType("uuid");

                    b.HasKey("EmployeeId", "TicketId");

                    b.HasIndex("TicketId");

                    b.ToTable("WorkingOnTickets");
                });

            modelBuilder.Entity("Project_C.Models.Company", b =>
                {
                    b.HasOne("Project_C.Models.Department", "Department")
                        .WithMany("Companies")
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Department");
                });

            modelBuilder.Entity("Project_C.Models.CompanyMachine", b =>
                {
                    b.HasOne("Project_C.Models.Company", "Company")
                        .WithMany("CompanyMachines")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_C.Models.Machine", "Machine")
                        .WithMany("CompanyMachines")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Machine");
                });

            modelBuilder.Entity("Project_C.Models.DepartmentEmployee", b =>
                {
                    b.HasOne("Project_C.Models.Department", "Department")
                        .WithMany("DepartmentEmployees")
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_C.Models.User", "User")
                        .WithMany("DepartmentEmployees")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Department");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Project_C.Models.Problem", b =>
                {
                    b.HasOne("Project_C.Models.Machine", "Machine")
                        .WithMany("Problems")
                        .HasForeignKey("MachineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Machine");
                });

            modelBuilder.Entity("Project_C.Models.Solutions", b =>
                {
                    b.HasOne("Project_C.Models.Problem", "Problem")
                        .WithMany("Solutions")
                        .HasForeignKey("ProblemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Problem");
                });

            modelBuilder.Entity("Project_C.Models.Ticket", b =>
                {
                    b.HasOne("Project_C.Models.CompanyMachine", "CompanyMachine")
                        .WithMany("Ticket")
                        .HasForeignKey("CompanyMachineId");

                    b.HasOne("Project_C.Models.Problem", "Problem")
                        .WithOne("ticket")
                        .HasForeignKey("Project_C.Models.Ticket", "ProblemId");

                    b.HasOne("Project_C.Models.User", "User")
                        .WithMany("Tickets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CompanyMachine");

                    b.Navigation("Problem");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Project_C.Models.User", b =>
                {
                    b.HasOne("Project_C.Models.Company", "Company")
                        .WithMany("Users")
                        .HasForeignKey("CompanyId");

                    b.Navigation("Company");
                });

            modelBuilder.Entity("Project_C.Models.WorkingOnTicket", b =>
                {
                    b.HasOne("Project_C.Models.User", "User")
                        .WithMany("WorkingOnTickets")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_C.Models.Ticket", "Ticket")
                        .WithMany("WorkingOnTickets")
                        .HasForeignKey("TicketId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Ticket");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Project_C.Models.Company", b =>
                {
                    b.Navigation("CompanyMachines");

                    b.Navigation("Users");
                });

            modelBuilder.Entity("Project_C.Models.CompanyMachine", b =>
                {
                    b.Navigation("Ticket");
                });

            modelBuilder.Entity("Project_C.Models.Department", b =>
                {
                    b.Navigation("Companies");

                    b.Navigation("DepartmentEmployees");
                });

            modelBuilder.Entity("Project_C.Models.Machine", b =>
                {
                    b.Navigation("CompanyMachines");

                    b.Navigation("Problems");
                });

            modelBuilder.Entity("Project_C.Models.Problem", b =>
                {
                    b.Navigation("Solutions");

                    b.Navigation("ticket")
                        .IsRequired();
                });

            modelBuilder.Entity("Project_C.Models.Ticket", b =>
                {
                    b.Navigation("WorkingOnTickets");
                });

            modelBuilder.Entity("Project_C.Models.User", b =>
                {
                    b.Navigation("DepartmentEmployees");

                    b.Navigation("Tickets");

                    b.Navigation("WorkingOnTickets");
                });
#pragma warning restore 612, 618
        }
    }
}
