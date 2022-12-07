global using Microsoft.EntityFrameworkCore;
global using Project_C.EF;
global using Project_C.Models;
global using Project_C.Enums;
global using Project_C.Services;
global using Project_C.Dtos;
global using System.ComponentModel.DataAnnotations;







// dotnet tool install --global dotnet-ef
// dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.9
// dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 6.0.5
// dotnet ef Migrations add _MigrationName
// dotnet ef Database update 

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<DataContext>(optionsBuilder => 
    optionsBuilder
    .UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    .LogTo(Console.WriteLine, LogLevel.Information));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IMachineService, MachineService>();
builder.Services.AddScoped<ICompanyService, CompanyService>();
builder.Services.AddScoped<ICompanyMachineService, CompanyMachineService>();
builder.Services.AddScoped<IDepartmentService, DepartmentService>();
builder.Services.AddScoped<IProblemService, ProblemService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();