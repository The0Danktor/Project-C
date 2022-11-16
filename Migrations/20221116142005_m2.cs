using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyMachine_Companies_CompanyId",
                table: "CompanyMachine");

            migrationBuilder.DropForeignKey(
                name: "FK_CompanyMachine_Machine_MachineId",
                table: "CompanyMachine");

            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentEmployee_Departments_DepartmentId",
                table: "DepartmentEmployee");

            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentEmployee_VisconEmployee_EmployeeId",
                table: "DepartmentEmployee");

            migrationBuilder.DropForeignKey(
                name: "FK_Problem_Machine_MachineId",
                table: "Problem");

            migrationBuilder.DropForeignKey(
                name: "FK_Solutions_Problem_ProblemId",
                table: "Solutions");

            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_CompanyMachine_Tekennummer",
                table: "Ticket");

            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_Customers_CustomerId",
                table: "Ticket");

            migrationBuilder.DropForeignKey(
                name: "FK_Ticket_Problem_ProblemId",
                table: "Ticket");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkingOnTicket_Ticket_TicketId",
                table: "WorkingOnTicket");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkingOnTicket_VisconEmployee_EmployeeId",
                table: "WorkingOnTicket");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WorkingOnTicket",
                table: "WorkingOnTicket");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VisconEmployee",
                table: "VisconEmployee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ticket",
                table: "Ticket");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Problem",
                table: "Problem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Machine",
                table: "Machine");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DepartmentEmployee",
                table: "DepartmentEmployee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CompanyMachine",
                table: "CompanyMachine");

            migrationBuilder.RenameTable(
                name: "WorkingOnTicket",
                newName: "workingOnTickets");

            migrationBuilder.RenameTable(
                name: "VisconEmployee",
                newName: "VisconEmployees");

            migrationBuilder.RenameTable(
                name: "Ticket",
                newName: "Tickets");

            migrationBuilder.RenameTable(
                name: "Problem",
                newName: "Problems");

            migrationBuilder.RenameTable(
                name: "Machine",
                newName: "Machines");

            migrationBuilder.RenameTable(
                name: "DepartmentEmployee",
                newName: "DepartmentEmployees");

            migrationBuilder.RenameTable(
                name: "CompanyMachine",
                newName: "CompanyMachines");

            migrationBuilder.RenameIndex(
                name: "IX_WorkingOnTicket_TicketId",
                table: "workingOnTickets",
                newName: "IX_workingOnTickets_TicketId");

            migrationBuilder.RenameIndex(
                name: "IX_Ticket_Tekennummer",
                table: "Tickets",
                newName: "IX_Tickets_Tekennummer");

            migrationBuilder.RenameIndex(
                name: "IX_Ticket_ProblemId",
                table: "Tickets",
                newName: "IX_Tickets_ProblemId");

            migrationBuilder.RenameIndex(
                name: "IX_Ticket_CustomerId",
                table: "Tickets",
                newName: "IX_Tickets_CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_Problem_MachineId",
                table: "Problems",
                newName: "IX_Problems_MachineId");

            migrationBuilder.RenameIndex(
                name: "IX_DepartmentEmployee_DepartmentId",
                table: "DepartmentEmployees",
                newName: "IX_DepartmentEmployees_DepartmentId");

            migrationBuilder.RenameIndex(
                name: "IX_CompanyMachine_MachineId",
                table: "CompanyMachines",
                newName: "IX_CompanyMachines_MachineId");

            migrationBuilder.RenameIndex(
                name: "IX_CompanyMachine_CompanyId",
                table: "CompanyMachines",
                newName: "IX_CompanyMachines_CompanyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_workingOnTickets",
                table: "workingOnTickets",
                columns: new[] { "EmployeeId", "TicketId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_VisconEmployees",
                table: "VisconEmployees",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tickets",
                table: "Tickets",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Problems",
                table: "Problems",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Machines",
                table: "Machines",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DepartmentEmployees",
                table: "DepartmentEmployees",
                columns: new[] { "EmployeeId", "DepartmentId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_CompanyMachines",
                table: "CompanyMachines",
                column: "Tekennummer");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyMachines_Companies_CompanyId",
                table: "CompanyMachines",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyMachines_Machines_MachineId",
                table: "CompanyMachines",
                column: "MachineId",
                principalTable: "Machines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentEmployees_Departments_DepartmentId",
                table: "DepartmentEmployees",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentEmployees_VisconEmployees_EmployeeId",
                table: "DepartmentEmployees",
                column: "EmployeeId",
                principalTable: "VisconEmployees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Problems_Machines_MachineId",
                table: "Problems",
                column: "MachineId",
                principalTable: "Machines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Solutions_Problems_ProblemId",
                table: "Solutions",
                column: "ProblemId",
                principalTable: "Problems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_CompanyMachines_Tekennummer",
                table: "Tickets",
                column: "Tekennummer",
                principalTable: "CompanyMachines",
                principalColumn: "Tekennummer",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Customers_CustomerId",
                table: "Tickets",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets",
                column: "ProblemId",
                principalTable: "Problems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_workingOnTickets_Tickets_TicketId",
                table: "workingOnTickets",
                column: "TicketId",
                principalTable: "Tickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_workingOnTickets_VisconEmployees_EmployeeId",
                table: "workingOnTickets",
                column: "EmployeeId",
                principalTable: "VisconEmployees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyMachines_Companies_CompanyId",
                table: "CompanyMachines");

            migrationBuilder.DropForeignKey(
                name: "FK_CompanyMachines_Machines_MachineId",
                table: "CompanyMachines");

            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentEmployees_Departments_DepartmentId",
                table: "DepartmentEmployees");

            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentEmployees_VisconEmployees_EmployeeId",
                table: "DepartmentEmployees");

            migrationBuilder.DropForeignKey(
                name: "FK_Problems_Machines_MachineId",
                table: "Problems");

            migrationBuilder.DropForeignKey(
                name: "FK_Solutions_Problems_ProblemId",
                table: "Solutions");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_CompanyMachines_Tekennummer",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Customers_CustomerId",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_workingOnTickets_Tickets_TicketId",
                table: "workingOnTickets");

            migrationBuilder.DropForeignKey(
                name: "FK_workingOnTickets_VisconEmployees_EmployeeId",
                table: "workingOnTickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_workingOnTickets",
                table: "workingOnTickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VisconEmployees",
                table: "VisconEmployees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tickets",
                table: "Tickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Problems",
                table: "Problems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Machines",
                table: "Machines");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DepartmentEmployees",
                table: "DepartmentEmployees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CompanyMachines",
                table: "CompanyMachines");

            migrationBuilder.RenameTable(
                name: "workingOnTickets",
                newName: "WorkingOnTicket");

            migrationBuilder.RenameTable(
                name: "VisconEmployees",
                newName: "VisconEmployee");

            migrationBuilder.RenameTable(
                name: "Tickets",
                newName: "Ticket");

            migrationBuilder.RenameTable(
                name: "Problems",
                newName: "Problem");

            migrationBuilder.RenameTable(
                name: "Machines",
                newName: "Machine");

            migrationBuilder.RenameTable(
                name: "DepartmentEmployees",
                newName: "DepartmentEmployee");

            migrationBuilder.RenameTable(
                name: "CompanyMachines",
                newName: "CompanyMachine");

            migrationBuilder.RenameIndex(
                name: "IX_workingOnTickets_TicketId",
                table: "WorkingOnTicket",
                newName: "IX_WorkingOnTicket_TicketId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_Tekennummer",
                table: "Ticket",
                newName: "IX_Ticket_Tekennummer");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_ProblemId",
                table: "Ticket",
                newName: "IX_Ticket_ProblemId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_CustomerId",
                table: "Ticket",
                newName: "IX_Ticket_CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_Problems_MachineId",
                table: "Problem",
                newName: "IX_Problem_MachineId");

            migrationBuilder.RenameIndex(
                name: "IX_DepartmentEmployees_DepartmentId",
                table: "DepartmentEmployee",
                newName: "IX_DepartmentEmployee_DepartmentId");

            migrationBuilder.RenameIndex(
                name: "IX_CompanyMachines_MachineId",
                table: "CompanyMachine",
                newName: "IX_CompanyMachine_MachineId");

            migrationBuilder.RenameIndex(
                name: "IX_CompanyMachines_CompanyId",
                table: "CompanyMachine",
                newName: "IX_CompanyMachine_CompanyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WorkingOnTicket",
                table: "WorkingOnTicket",
                columns: new[] { "EmployeeId", "TicketId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_VisconEmployee",
                table: "VisconEmployee",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ticket",
                table: "Ticket",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Problem",
                table: "Problem",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Machine",
                table: "Machine",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DepartmentEmployee",
                table: "DepartmentEmployee",
                columns: new[] { "EmployeeId", "DepartmentId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_CompanyMachine",
                table: "CompanyMachine",
                column: "Tekennummer");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyMachine_Companies_CompanyId",
                table: "CompanyMachine",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyMachine_Machine_MachineId",
                table: "CompanyMachine",
                column: "MachineId",
                principalTable: "Machine",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentEmployee_Departments_DepartmentId",
                table: "DepartmentEmployee",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentEmployee_VisconEmployee_EmployeeId",
                table: "DepartmentEmployee",
                column: "EmployeeId",
                principalTable: "VisconEmployee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Problem_Machine_MachineId",
                table: "Problem",
                column: "MachineId",
                principalTable: "Machine",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Solutions_Problem_ProblemId",
                table: "Solutions",
                column: "ProblemId",
                principalTable: "Problem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_CompanyMachine_Tekennummer",
                table: "Ticket",
                column: "Tekennummer",
                principalTable: "CompanyMachine",
                principalColumn: "Tekennummer",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_Customers_CustomerId",
                table: "Ticket",
                column: "CustomerId",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ticket_Problem_ProblemId",
                table: "Ticket",
                column: "ProblemId",
                principalTable: "Problem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingOnTicket_Ticket_TicketId",
                table: "WorkingOnTicket",
                column: "TicketId",
                principalTable: "Ticket",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingOnTicket_VisconEmployee_EmployeeId",
                table: "WorkingOnTicket",
                column: "EmployeeId",
                principalTable: "VisconEmployee",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
