using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Customer_CustomerId1",
                table: "Tickets");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_CustomerId1",
                table: "Tickets");

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"));

            migrationBuilder.DropColumn(
                name: "CustomerId1",
                table: "Tickets");

            migrationBuilder.AddColumn<string>(
                name: "Tekennummer",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("47cd7834-02a6-44ca-9df4-0cead5c896a9"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "52UL17l/VTT0YczXBJS8NTw1TOSiBsdllj3i9k38RV8MpmI+lFO1Vw4mGEIozBcSrYDDJX11LOTDUEU3XSd+Bw==", "+6KnnEO1YQ+Gs+HwpRm9Gu0TcbKUFYJWiPVssFm8un3Hvc5zR70SCANlQP7EpwBZYssuLQl5JvVfTbcJNemMWp17ErFMSIXEt8lcWn5OHGlJrYjTvE2jkE3dWWX0jmBiZS/Vd3/jEQU8CJ0F9+44RiMBjLqFGuCFaBUPWJBAXzA=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("47cd7834-02a6-44ca-9df4-0cead5c896a9"));

            migrationBuilder.DropColumn(
                name: "Tekennummer",
                table: "Tickets");

            migrationBuilder.AddColumn<Guid>(
                name: "CustomerId1",
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

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "MdPlL9gDh9ySbf7XnCc0ECNexDsnLVNU75OvHgKho5WTXhL3Tpy4E7bIQuGUueFGhoSezyZNIMSMdYrmMKlZag==", "lk4WDLceDAjsyJQWuShk1mWGeFjEblj8zlnxnLS6i/J4zAODZz3nTIqeq0a5DiobvQb80WAOww/uEBm2OwYcphvkCCXDmtQumDMvLY0ZLR4IM8KAJ2sAQi15TElyktIpeTqw35wHP+gS5AsuHWli/RDc99lEBwf6vz9YVq3pH08=" });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CustomerId1",
                table: "Tickets",
                column: "CustomerId1");

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
        }
    }
}
