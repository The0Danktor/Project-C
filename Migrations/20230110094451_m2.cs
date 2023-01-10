using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("b0b04a00-5f2d-4c37-ad53-8122b290f909"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "OtffCS0hgLnyOuSQIklQq0NljqZCw1Bb9JCXCZPWaf5mHy7olWllg44uVxgBdob0NBpYfrEVYP2mpu6yq4MAYA==", "qRQ80ZAzH1HNPIV243FqfLL6jR05dKxgS4Ntd7jkv+jk7Yxu7L31zn7YwmBJ9U5ejH4FrJiD00KINJCw0+605SxT2L4Crnh36qqeYmtYTIPoAPslpKeR3hv6WGf4Pq7/pkcUg/uiDLYj4tBQW8rp5fUTmQ7geO8hezbrESir0Tk=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("b0b04a00-5f2d-4c37-ad53-8122b290f909"));
        }
    }
}
