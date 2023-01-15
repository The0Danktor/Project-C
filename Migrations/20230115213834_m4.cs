using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("3d47cedd-5f26-450c-ae50-1283c49d96f1"));

            migrationBuilder.DropColumn(
                name: "CompanyMachineId",
                table: "Tickets");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("090889f0-0d0b-4e95-9556-6f7cb58032eb"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "dHseLxspG8qRBGdoWROgQ0/PehHW/VPSGxBnhd4CRC4gBHENitLsEs4ATQPXcZnw70RLQCZ25MPgMWPw6AONWw==", "1+w2tt0h5EwiwCMi1yWCcX87PQcDLMGP1ZFjRyeKHFzDTb2DtPiX2iSVSHjW6BOvhdd4EogLvAbccqM93o4f2CWQcK8atr5SGDnNTTBYu4zgIxgM0Jxi82G9OLrFfiLwi5tGyRauGYm9BiX0qOhZCbjAObGSVRnfz4Qj7sBQ1kg=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("090889f0-0d0b-4e95-9556-6f7cb58032eb"));

            migrationBuilder.AddColumn<Guid>(
                name: "CompanyMachineId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("3d47cedd-5f26-450c-ae50-1283c49d96f1"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "06YDdYSuQVoLPm0mj8Xi2q7LXUGsP34PJ23m8/emQjn11mPRADFwTeuMnmIS5FEIreIeug6Vwq0Fyg6/Hggh5Q==", "8VJqdAncFjW9zzFtDQwtqbco+p2pbn/Ul9NdsGNml2ArOYC1MqaSTa0bmlMcTdyCTr2OaJ1spc/f9Os8P3wyRWJAs7U/BZmt+T1nK924VtDJ0EYk9aakNo+rzzqPU8xZ4wV9uTXVRWDImpn5kl77z752sHliEjtKDz2YDU4J6hU=" });
        }
    }
}
