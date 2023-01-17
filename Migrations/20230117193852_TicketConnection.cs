using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class TicketConnection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Customer_CustomerId1",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_users_CustomerId",
                table: "Tickets");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_CustomerId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "CustomerId1",
                table: "Tickets",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_CustomerId1",
                table: "Tickets",
                newName: "IX_Tickets_UserId");

            migrationBuilder.AddColumn<string>(
                name: "Tekennummer",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "BXtG8Y6JRNcuQ3/WKpvRrtP+K5z+KVMoUCuYzmAuCUApozZs/cIZBRN699iZN15HUo1NPu/tYVzRXBhjSzELKQ==", "SVrCkvF3Xu4IOvBr/OqccTBDs10Cd/s5yCoDaiDvahf3s7e7nXnFqlF7te6L9a+k9930Dz3KkxiFz36pGeTYs66kJw/ZW4L38kgRi1pdTpAkWX5vhyOorurbQIg0G1Gs4m3MFQGOw7YrPQnohM4CFE0k2934xIQvCzXfpjwFPuk=" });

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_users_UserId",
                table: "Tickets",
                column: "UserId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_users_UserId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Tekennummer",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tickets",
                newName: "CustomerId1");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_UserId",
                table: "Tickets",
                newName: "IX_Tickets_CustomerId1");

            migrationBuilder.AddColumn<Guid>(
                name: "CustomerId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CompanyId = table.Column<Guid>(type: "uuid", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: true),
                    Phone = table.Column<string>(type: "text", nullable: false),
                    Supervisor = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Customer_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "MdPlL9gDh9ySbf7XnCc0ECNexDsnLVNU75OvHgKho5WTXhL3Tpy4E7bIQuGUueFGhoSezyZNIMSMdYrmMKlZag==", "lk4WDLceDAjsyJQWuShk1mWGeFjEblj8zlnxnLS6i/J4zAODZz3nTIqeq0a5DiobvQb80WAOww/uEBm2OwYcphvkCCXDmtQumDMvLY0ZLR4IM8KAJ2sAQi15TElyktIpeTqw35wHP+gS5AsuHWli/RDc99lEBwf6vz9YVq3pH08=" });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CustomerId",
                table: "Tickets",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Customer_CompanyId",
                table: "Customer",
                column: "CompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Customer_CustomerId1",
                table: "Tickets",
                column: "CustomerId1",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_users_CustomerId",
                table: "Tickets",
                column: "CustomerId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
