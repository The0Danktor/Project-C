using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class FixUniqueConstraint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Tickets_ProblemId",
                table: "Tickets");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "HrV4Mkax/uTF4k4d8w9SeSz6fnugg3vq1HVDmGWp7KjhKDqKphQKiuFEK576kOpzo7Z0SYlJ7Te8bdFA5dfBzQ==", "xzXc8dmZP8Zu+od0ukY+Qvpp+IO61JnGzR1XkfvNG6blrQ7U1g+qJfe6RmpvLI6TVHOr8VqktnIypPeOsanXFpc8+5MBFOUmSYm4m4LgG5ef7jQn5Hr4DvKTAbbQ58K6DNfz4AIRbRQ0rEHSLAa67tCG8qajv396EaHy3elMJH8=" });

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "5PL7yhjYMxJWBOPjbetUMmlB6HYG6pYvoUc1T9SpTCI/lqzdpYmmEY+J3phnCqWEhRP/jR68qg3QITaOp2g1SQ==", "r/qHRXfNeBMf8z5QwRFNXfRRx/87RhlA1G0OFEVrTvei8Hviz44Ca/79lSVsJpIT2YLohYmXODY9N+RQkozFF+OxMCdQVSA0t+hVy9HJZNcYXvHv2mGYYzyIWx9YJHf+8gDTv3G04fpGn9387elFmgKbt0LNIDy7Wrgy4k5MVJE=" });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_ProblemId",
                table: "Tickets",
                column: "ProblemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Tickets_ProblemId",
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
                name: "IX_Tickets_ProblemId",
                table: "Tickets",
                column: "ProblemId",
                unique: true);
        }
    }
}
