using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class FixForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_CompanyMachines_Id",
                table: "Tickets");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "akJ8osZXTZkBDF+y6ovhv/9IZ6WquWFPYakjO+A6GCzE2IUDzogF1wMfvZxotVT16nJ2bUBP8ZTZJhkJIDaTgw==", "pL4Hr6fGAnivMFsvkRVWU5bd7O17LgsRvhutery+8bkWVO8YMT+Oe1PyjRwSg0bo96IiD8uUMeB7xDfWsQOsteeSRYJ5k9/n6Eb8EmHTNkjrkQLsJGqjlcUU3dW8x2mpTjM3zsZOuxXFiurDsUiAmFDGYhJkErfVOvcRJTOvv5k=" });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "eY2p5G7/0SxDEeGKhNKUSYwZZjiR+WqYKZl7PzAjp9CLAO8IQCRMeD44ZKXyRmoQ1JmxBU2IgOfvqsMLsNb3+g==", "3gAytNJAs/cFuJBUedEdn1EHbKF7yg4NwJUxLZ5zAECphHPIbgOUSHxR5eqJenz7KE5tu0Qm4G5O0dkx7cHHCt7Cx8nhs8fLcao/zmdpznw/0NKkypMGStKXSYFrpb1xjsEH3IAjx5zVCvyg1194jlekFGFCu/PQ8AvVAT1d0tE=" });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CompanyMachineId",
                table: "Tickets",
                column: "CompanyMachineId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_CompanyMachines_CompanyMachineId",
                table: "Tickets",
                column: "CompanyMachineId",
                principalTable: "CompanyMachines",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_CompanyMachines_CompanyMachineId",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_CompanyMachineId",
                table: "Tickets");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "Z/7M6kVako2LovvB2VKq+d1MlMw1DGav6ghw8+LBWSlpp95bUuuuj5nufpntMNKkGu7qpwSzmzkAvfCAWvehgA==", "5CAOTUdcafZoAmRFcTOzDsw0jQ/VO+pBnAfK66JoeoLgySdCBVUW3DzHq2y10UBTRYQ/MWxAY3AgLptSqtcPKnlYdwpAES/1xOq1hqtexiXkd/qixz+JIrq9t7LaDRr2vamloJEjEGedh1/E+VsI8ZbZIHYHaaaQWq8fr1UjCcg=" });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "5NqLKVXWjCY+bJYR6bHwURnEkFwgB8GeAvK/AR9Z7N/A2pE+HWnvwSpE3tUTI4ISq0t1iwJEGTJ8ovxDj0Gerg==", "00QA62n85Hc3ty3r1SCXNRP2dD+AxA52LK/gi24KDBOE1fXMOa/gUqBNhygsl6Vai4rKZUeb095wpqPjnupcv4EkHpx95LrPTg/xn9sge8KAVRzK5dQu4FxJi0zQRxMYZCaFYunldT5/sQbIipXwHVJ3mQOG61T2i3StnWhR/Oo=" });

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_CompanyMachines_Id",
                table: "Tickets",
                column: "Id",
                principalTable: "CompanyMachines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
