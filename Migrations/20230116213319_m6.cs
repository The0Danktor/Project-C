using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_users_CustomerId",
                table: "Tickets");

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("360d3cf4-11af-46d3-8639-dd77ed057c0a"));

            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "Tickets",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_CustomerId",
                table: "Tickets",
                newName: "IX_Tickets_UserId");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("82458646-2fed-463d-bf8a-78a101098883"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "LHvWOgXfETizmoiJ2Jxlku/zfs4ptGwAN9gVJW6tuQGXQIQ6O7mMxh5TUZts9BndHGCuafMuaZvvQ2V2YHJfGA==", "AvjshWMBhV9ayPaqYapzelJCZUenFy/7vl8HSV53kf10HvAXiizCIZNpjDJ3AoC7hiuZIDtTbPbEl+YrUvTvlp+7qUYx+yAal3Tt5qdDDo1DFZJjSYTFFaNz0Vt0XD832UTPQOLu1Ej5KOIAXwlZdCSzopvtbUSK5A5VjgHieD0=" });

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

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("82458646-2fed-463d-bf8a-78a101098883"));

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tickets",
                newName: "CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_UserId",
                table: "Tickets",
                newName: "IX_Tickets_CustomerId");

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("360d3cf4-11af-46d3-8639-dd77ed057c0a"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "B4q9ssu9FhZR2AAcmGx6sydn6Po6sBVFqMbne9Wxp1d4AhKjzlKloDYupbNZvT24HT7tq+3tekd7TGS6oqtQvA==", "/qBuYUmiqM33DGkyQs3vHn+fpdfbCdq30HwOKWI5rpngEBgE256lM9NbtJfIebHMnRj2Eu856cDja7QfoVilSREZFNqw4k8B2SL+l2yLgzTAwSrzt75gPkSkaDUaeNQ++ykOI2TEX5htcuLjVWSyYakJVjITHyLFC9jdu3oBwY8=" });

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
