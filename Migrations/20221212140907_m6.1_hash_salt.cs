using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m61_hash_salt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "users",
                newName: "passwordSalt");

            migrationBuilder.AddColumn<string>(
                name: "passwordHash",
                table: "users",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "passwordHash",
                table: "users");

            migrationBuilder.RenameColumn(
                name: "passwordSalt",
                table: "users",
                newName: "Password");
        }
    }
}
