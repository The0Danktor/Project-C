using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class AddTicket : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets");

            migrationBuilder.AlterColumn<string>(
                name: "Tekennummer",
                table: "Tickets",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<Guid>(
                name: "ProblemId",
                table: "Tickets",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AlterColumn<Guid>(
                name: "CompanyMachineId",
                table: "Tickets",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddColumn<List<string>>(
                name: "Images",
                table: "Tickets",
                type: "text[]",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "ProblemDescription",
                table: "Tickets",
                type: "text",
                nullable: true);

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
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets",
                column: "ProblemId",
                principalTable: "Problems",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "Images",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "ProblemDescription",
                table: "Tickets");

            migrationBuilder.AlterColumn<string>(
                name: "Tekennummer",
                table: "Tickets",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ProblemId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CompanyMachineId",
                table: "Tickets",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "kCOKueVOkFQf+mLOnUZIKNkBQojUZsnQEKDzKSEJd6uz6iVc5W6fJDjb74GtdRCUtaaFjVDr9MzHdjPPSbrg9Q==", "qxerB4ItAgkbV3kH494BvXkBYfrS3mqrjjbRgFTDAQSgLAej3YZ4gBEw+bOT8KtI/p5SAIP+/fqmGiR1MIsIMObll097VP3XJQ+ac6zR2oTV7LHBld1xQHTVJW5Ll0cuzXafJTEcS3MuWwL09c/Xpk5snPKpuXJbq2pa0IYY184=" });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "87dYP1Ekedrx56cAke9vQF+NpOqCYOzWnIU0RHCv4A7Eq/uEDH1npPC3r55hjQP68nbtwjebRvYo9Zks7kxugQ==", "DTDz/5UMpHGF2ZYf2TciJ9NfmJq36eP+E9SWavQKy/UXC3WVPYirug5C6j9cF3XBX4PCn14PBz0qRJk/9cnWHVUVN7Tu4G8Gvx23Fn4vJ5NPMM6rjX+IIo8MMCWLY1GOviQwT6OlRNyBoFj4Fz6x9i44rEH5z6PB7/t/M0JL7OA=" });

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_Problems_ProblemId",
                table: "Tickets",
                column: "ProblemId",
                principalTable: "Problems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
