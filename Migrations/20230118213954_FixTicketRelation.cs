using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class FixTicketRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Tickets_CompanyMachineId",
                table: "Tickets");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "1dmAm5s0mWmRN7PimGG+kdRUHHFk6sUhBPRRhcOHIHZsQ25xVecDf+Anq5sYwfcpcjAKocPmJ/maoLyZpoQFqw==", "xZsjABAKNPtlb6ftI2bfWgy8iPhLh2yCZNyPZT7LFjN8CpofcH6s0eRVK6EsMtIbe/Zyuft9wCWMGAKKa/gT3h6YautV2EGJgt5Ew8j/+DhAaOhUdDDOR65O5mWkGnsZBSy9aEo/x+vSnwRcN2pxJ5uTli7kG/owaHCZMF5N0jM=" });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "dn433gzuOULOmaw35rHY+H1voC96W1tMP+YNbgNXhk8xPWYy8ZALwQLXYRf6wByMaBx0Ol0WQO/1A2VgucQqoQ==", "1DZPFzP6BNY4D/L2+titzqQvaWRbFJ8ncuYRW7TkV6+gq4A5xSdU0dZngv2Ys/OwiMb+wKhVP6reWksEwwnr8kX71LiHPVjxR1CnnGg1RJTZw5cIH5o0ndSsNkAbBIJISGu0coebgoD5EMq9E8fkUfxUQRRF9QWOiVjCS0ga59c=" });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CompanyMachineId",
                table: "Tickets",
                column: "CompanyMachineId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Tickets_CompanyMachineId",
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
        }
    }
}
