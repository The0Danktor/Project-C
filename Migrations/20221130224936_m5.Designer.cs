﻿// <auto-generated />
using System;
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
    [Migration("20221130224936_m5")]
    partial class m5
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
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
                });

            modelBuilder.Entity("Project_C.Models.CompanyMachine", b =>
                {
                    b.Property<string>("Tekennummer")
                        .HasColumnType("text");

                    b.Property<Guid>("CompanyId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("MachineId")
                        .HasColumnType("uuid");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Tekennummer");

                    b.HasIndex("CompanyId");

                    b.HasIndex("MachineId");

                    b.ToTable("CompanyMachines");
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

                    b.HasKey("Id");

                    b.ToTable("Machines");
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
                });

            modelBuilder.Entity("Project_C.Models.Ticket", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("CustomerId")
                        .HasColumnType("uuid");

                    b.Property<string>("Note")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid>("ProblemId")
                        .HasColumnType("uuid");

                    b.Property<string>("Tekennummer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("ProblemId")
                        .IsUnique();

                    b.HasIndex("Tekennummer")
                        .IsUnique();

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

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("users");
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
                    b.HasOne("Project_C.Models.User", "User")
                        .WithMany("Tickets")
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_C.Models.Problem", "Problem")
                        .WithOne("ticket")
                        .HasForeignKey("Project_C.Models.Ticket", "ProblemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Project_C.Models.CompanyMachine", "CompanyMachine")
                        .WithOne("Ticket")
                        .HasForeignKey("Project_C.Models.Ticket", "Tekennummer")
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
                    b.Navigation("Ticket")
                        .IsRequired();
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