using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("47cd7834-02a6-44ca-9df4-0cead5c896a9"));

            migrationBuilder.DropColumn(
                name: "CompanyMachineId",
                table: "Tickets");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("67c7b07b-e49d-4567-8d2a-4a06dabc3235"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "NPhDuBrCeeEP/zDaYRg2sT2GbhsyMpqDVfEVpkdq8I+EaVoIvW41t53JMUZlJk9m+wshng03s3NW0OCdNq8bYg==", "3hrHC/fCkT6RchxeQECKXPlJ05zMxZla8myOss5Q63y7RVuqcFwLYQlfSMllVHs7au/MLSll5XqWcOwk5WzbORzja0PmgCKWZDDvXdpYEDpbFjR9x79mEvwP7Hyk2NhgvdKHUMFXBUH6LfHPbm8E6h8ikS6WJ7kBo/ZERxe1KsY=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("67c7b07b-e49d-4567-8d2a-4a06dabc3235"));

            migrationBuilder.AddColumn<Guid>(
                name: "CompanyMachineId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("47cd7834-02a6-44ca-9df4-0cead5c896a9"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "52UL17l/VTT0YczXBJS8NTw1TOSiBsdllj3i9k38RV8MpmI+lFO1Vw4mGEIozBcSrYDDJX11LOTDUEU3XSd+Bw==", "+6KnnEO1YQ+Gs+HwpRm9Gu0TcbKUFYJWiPVssFm8un3Hvc5zR70SCANlQP7EpwBZYssuLQl5JvVfTbcJNemMWp17ErFMSIXEt8lcWn5OHGlJrYjTvE2jkE3dWWX0jmBiZS/Vd3/jEQU8CJ0F9+44RiMBjLqFGuCFaBUPWJBAXzA=" });
        }
    }
}
