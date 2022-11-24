using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_workingOnTickets_Tickets_TicketId",
                table: "workingOnTickets");

            migrationBuilder.DropForeignKey(
                name: "FK_workingOnTickets_VisconEmployees_EmployeeId",
                table: "workingOnTickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_workingOnTickets",
                table: "workingOnTickets");

            migrationBuilder.RenameTable(
                name: "workingOnTickets",
                newName: "WorkingOnTickets");

            migrationBuilder.RenameIndex(
                name: "IX_workingOnTickets_TicketId",
                table: "WorkingOnTickets",
                newName: "IX_WorkingOnTickets_TicketId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_WorkingOnTickets",
                table: "WorkingOnTickets",
                columns: new[] { "EmployeeId", "TicketId" });

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingOnTickets_Tickets_TicketId",
                table: "WorkingOnTickets",
                column: "TicketId",
                principalTable: "Tickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_WorkingOnTickets_VisconEmployees_EmployeeId",
                table: "WorkingOnTickets",
                column: "EmployeeId",
                principalTable: "VisconEmployees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_WorkingOnTickets_Tickets_TicketId",
                table: "WorkingOnTickets");

            migrationBuilder.DropForeignKey(
                name: "FK_WorkingOnTickets_VisconEmployees_EmployeeId",
                table: "WorkingOnTickets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_WorkingOnTickets",
                table: "WorkingOnTickets");

            migrationBuilder.RenameTable(
                name: "WorkingOnTickets",
                newName: "workingOnTickets");

            migrationBuilder.RenameIndex(
                name: "IX_WorkingOnTickets_TicketId",
                table: "workingOnTickets",
                newName: "IX_workingOnTickets_TicketId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_workingOnTickets",
                table: "workingOnTickets",
                columns: new[] { "EmployeeId", "TicketId" });

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
    }
}
