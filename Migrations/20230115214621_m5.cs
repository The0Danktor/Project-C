using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                values: new object[] { new Guid("360d3cf4-11af-46d3-8639-dd77ed057c0a"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "B4q9ssu9FhZR2AAcmGx6sydn6Po6sBVFqMbne9Wxp1d4AhKjzlKloDYupbNZvT24HT7tq+3tekd7TGS6oqtQvA==", "/qBuYUmiqM33DGkyQs3vHn+fpdfbCdq30HwOKWI5rpngEBgE256lM9NbtJfIebHMnRj2Eu856cDja7QfoVilSREZFNqw4k8B2SL+l2yLgzTAwSrzt75gPkSkaDUaeNQ++ykOI2TEX5htcuLjVWSyYakJVjITHyLFC9jdu3oBwY8=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("360d3cf4-11af-46d3-8639-dd77ed057c0a"));

            migrationBuilder.DropColumn(
                name: "CompanyMachineId",
                table: "Tickets");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("090889f0-0d0b-4e95-9556-6f7cb58032eb"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "dHseLxspG8qRBGdoWROgQ0/PehHW/VPSGxBnhd4CRC4gBHENitLsEs4ATQPXcZnw70RLQCZ25MPgMWPw6AONWw==", "1+w2tt0h5EwiwCMi1yWCcX87PQcDLMGP1ZFjRyeKHFzDTb2DtPiX2iSVSHjW6BOvhdd4EogLvAbccqM93o4f2CWQcK8atr5SGDnNTTBYu4zgIxgM0Jxi82G9OLrFfiLwi5tGyRauGYm9BiX0qOhZCbjAObGSVRnfz4Qj7sBQ1kg=" });
        }
    }
}
