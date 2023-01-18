using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Machines",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Tekennummer = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Machines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Companies_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Problems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    MachineId = table.Column<Guid>(type: "uuid", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Problems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Problems_Machines_MachineId",
                        column: x => x.MachineId,
                        principalTable: "Machines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CompanyMachines",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    CompanyId = table.Column<Guid>(type: "uuid", nullable: false),
                    MachineId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyMachines", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompanyMachines_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompanyMachines_Machines_MachineId",
                        column: x => x.MachineId,
                        principalTable: "Machines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    passwordHash = table.Column<string>(type: "text", nullable: false),
                    passwordSalt = table.Column<string>(type: "text", nullable: false),
                    Phone = table.Column<string>(type: "text", nullable: false),
                    CompanyId = table.Column<Guid>(type: "uuid", nullable: true),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    ResetPassword = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_users_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Solutions",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ProblemId = table.Column<Guid>(type: "uuid", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Solutions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Solutions_Problems_ProblemId",
                        column: x => x.ProblemId,
                        principalTable: "Problems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DepartmentEmployees",
                columns: table => new
                {
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    DepartmentId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentEmployees", x => new { x.EmployeeId, x.DepartmentId });
                    table.ForeignKey(
                        name: "FK_DepartmentEmployees_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartmentEmployees_users_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Tekennummer = table.Column<string>(type: "text", nullable: true),
                    CompanyMachineId = table.Column<Guid>(type: "uuid", nullable: true),
                    ProblemId = table.Column<Guid>(type: "uuid", nullable: true),
                    ProblemDescription = table.Column<string>(type: "text", nullable: true),
                    Images = table.Column<List<string>>(type: "text[]", nullable: false),
                    Note = table.Column<string>(type: "text", nullable: false),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false),
                    Priority = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tickets_CompanyMachines_CompanyMachineId",
                        column: x => x.CompanyMachineId,
                        principalTable: "CompanyMachines",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Tickets_Problems_ProblemId",
                        column: x => x.ProblemId,
                        principalTable: "Problems",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Tickets_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkingOnTickets",
                columns: table => new
                {
                    EmployeeId = table.Column<Guid>(type: "uuid", nullable: false),
                    TicketId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkingOnTickets", x => new { x.EmployeeId, x.TicketId });
                    table.ForeignKey(
                        name: "FK_WorkingOnTickets_Tickets_TicketId",
                        column: x => x.TicketId,
                        principalTable: "Tickets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_WorkingOnTickets_users_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "Id", "Name" },
                values: new object[] { new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"), "IT" });

            migrationBuilder.InsertData(
                table: "Machines",
                columns: new[] { "Id", "Name", "Tekennummer" },
                values: new object[,]
                {
                    { new Guid("1b4f5865-c09e-4e6e-b064-39d40fcc982a"), "Opzetpositie", "5007894" },
                    { new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"), "Kettingbaan", "5010754" },
                    { new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb"), "Transfer shuttle", "5008716" },
                    { new Guid("50188d9d-cd82-470f-a98d-d815e744e64f"), "Satelliet shuttle", "5001483" },
                    { new Guid("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"), "Palletiseerder", "5004982" },
                    { new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db"), "Lift", "5004914" },
                    { new Guid("e7b41288-5aa1-4839-9698-ebcb3623ea4d"), "Voorstapelaar", "7005318" }
                });

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"), null, "Admin@admin.com", "Admin", "12345678", false, 4, "vczuBRxRe9n6TIStpucBgtE9SFSgwpeRvgbkl7utaDoZZbA7lsVueEi0z6eZr17zciG7aDtn7qifIU7eaBoNbw==", "KmHH6K1+l/DYLpyGr1NmZUi+mPHUlN9orP/S+++kAJs7gZ3YaQBnDdxB7QBObvLKjtJXex4dWLctwyqnjgxIrIDthSRAJqSV1XlfsW3ETVB2lzsRc3LJGTEinGHSTZer88lj84I4yIq8CM51HVQ1ofC+2vH2CI0c9/ryWGlIwr0=" });

            migrationBuilder.InsertData(
                table: "Companies",
                columns: new[] { "Id", "DepartmentId", "Name" },
                values: new object[,]
                {
                    { new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"), new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"), "Neutral Incorperated" },
                    { new Guid("523e4162-d992-46c2-a774-d831b8aa007c"), new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"), "Good Incorperated" },
                    { new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"), "Evil Incorperated" }
                });

            migrationBuilder.InsertData(
                table: "Problems",
                columns: new[] { "Id", "Description", "MachineId" },
                values: new object[,]
                {
                    { new Guid("030acb51-2100-47d3-99c9-2e920360c67d"), "Niet veilig om te bewegen", new Guid("50188d9d-cd82-470f-a98d-d815e744e64f") },
                    { new Guid("0c9d60f7-6e4c-4e09-88c0-9c0030070874"), "Laden/lossen duurt te lang", new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46") },
                    { new Guid("1bc3c350-d72e-4fb6-9a41-7899b8797135"), "Product verkeerd op machine", new Guid("50188d9d-cd82-470f-a98d-d815e744e64f") },
                    { new Guid("43216e47-c66c-459d-b633-76d9043d0fce"), "Geen verbinding met satelliet", new Guid("50188d9d-cd82-470f-a98d-d815e744e64f") },
                    { new Guid("5c2cb042-979d-4be1-a12e-98873145fdb2"), "Laden/lossen duurt te lang", new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb") },
                    { new Guid("602c8e1a-2ccc-42f4-9698-713bdfbe328e"), "Satteliet verkeer op machine", new Guid("50188d9d-cd82-470f-a98d-d815e744e64f") },
                    { new Guid("8b2942a0-bc67-4320-8a9b-38338ac172cb"), "Niet veilig om te bewegen", new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db") },
                    { new Guid("c58f310e-df55-483b-9372-3741ae27d788"), "Niet veilig om te bewegen", new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb") },
                    { new Guid("f6ea123c-c3e3-48f6-bf6f-271cefdbd734"), "Laden/lossen duurt te lang", new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db") }
                });

            migrationBuilder.InsertData(
                table: "CompanyMachines",
                columns: new[] { "Id", "CompanyId", "MachineId", "Name" },
                values: new object[,]
                {
                    { new Guid("12c775f8-8519-4026-ba68-bf537a705be4"), new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), new Guid("50188d9d-cd82-470f-a98d-d815e744e64f"), "Satelliet shuttle" },
                    { new Guid("747688bb-efe1-48f0-97e2-c2d1304a6937"), new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb"), "Transfer shuttle" },
                    { new Guid("7bf1c1b5-4e6c-4c64-8afa-3a6c9f7e645e"), new Guid("523e4162-d992-46c2-a774-d831b8aa007c"), new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"), "Kettingbaan" },
                    { new Guid("8c704127-a9bf-421f-94c0-0ff9bafa576b"), new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"), new Guid("e7b41288-5aa1-4839-9698-ebcb3623ea4d"), "Voorstapelaar" },
                    { new Guid("b23c45bd-f115-44e3-a7a8-fea2f2dfd2a0"), new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"), new Guid("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"), "Palletiseerder" },
                    { new Guid("ef698064-818f-4087-9219-f851dc99bc73"), new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db"), "Lift" },
                    { new Guid("f1e2d95c-28f1-4f1a-8869-eb5848569e0d"), new Guid("523e4162-d992-46c2-a774-d831b8aa007c"), new Guid("1b4f5865-c09e-4e6e-b064-39d40fcc982a"), "Opzetpositie" }
                });

            migrationBuilder.InsertData(
                table: "Solutions",
                columns: new[] { "Id", "Description", "ProblemId" },
                values: new object[,]
                {
                    { new Guid("0ae4cdbc-ea79-4d21-9e4a-71ccbbe5e962"), "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan", new Guid("0c9d60f7-6e4c-4e09-88c0-9c0030070874") },
                    { new Guid("10eb6942-c2c8-4d06-a776-d6c276c8c373"), "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie", new Guid("030acb51-2100-47d3-99c9-2e920360c67d") },
                    { new Guid("3d29a985-3d1a-4a71-aeae-f805ba191a3f"), "De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie", new Guid("c58f310e-df55-483b-9372-3741ae27d788") },
                    { new Guid("4f808a05-543d-424d-a5ee-d30ad9b64534"), "Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle", new Guid("43216e47-c66c-459d-b633-76d9043d0fce") },
                    { new Guid("9853d965-8a10-4630-9adf-9fa0d3827dea"), "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de shuttle en voer recovery uit in VLC", new Guid("5c2cb042-979d-4be1-a12e-98873145fdb2") },
                    { new Guid("b96ce683-8386-4045-8c3f-3b60fc664d82"), "De pallet steekt uit op de lift of een andere pallet langs de liftschacht. Draai de pallet handmatig op de juiste positie", new Guid("8b2942a0-bc67-4320-8a9b-38338ac172cb") },
                    { new Guid("c7db4f37-9093-42ef-8649-9c0715d39fb4"), "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen", new Guid("602c8e1a-2ccc-42f4-9698-713bdfbe328e") },
                    { new Guid("d1c14e9e-3727-4f07-b39a-09f6287eb3b2"), "Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen", new Guid("1bc3c350-d72e-4fb6-9a41-7899b8797135") },
                    { new Guid("f0404b74-3222-4563-8e6c-8278bc63905e"), "Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat, reset de baan en de vt en voer recovery uit in VLC", new Guid("f6ea123c-c3e3-48f6-bf6f-271cefdbd734") }
                });

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "Id", "CompanyId", "Email", "Name", "Phone", "ResetPassword", "Role", "passwordHash", "passwordSalt" },
                values: new object[] { new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"), new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), "admin@evil.inc", "Evil Incorperated Admin", "0666666666", false, 2, "SXBmYgitS/DPQeVLOiFHCvlFkmV1J2f2DVxaYhCAP1/F0FSCHzdt21l/IRbf/+CldyA1g7sesexz9Yj3IRFh7g==", "4F5bN8S1jsClYaAEzZdSohjlAPGKQ+vTqBKtEMM6Zz+yMK07f0sixA/s+FLBoANiIJztFI4RgnjCKnfV/NgrLOigAQXhGgVZeLglA6N2FS/cRTetXvCtUlzuBW15N1sfv6fnoQgkHEVX+T6BzEX7zSoh1diaVLLV/esl603zOY4=" });

            migrationBuilder.CreateIndex(
                name: "IX_Companies_DepartmentId",
                table: "Companies",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_CompanyMachines_CompanyId",
                table: "CompanyMachines",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_CompanyMachines_MachineId",
                table: "CompanyMachines",
                column: "MachineId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentEmployees_DepartmentId",
                table: "DepartmentEmployees",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Problems_MachineId",
                table: "Problems",
                column: "MachineId");

            migrationBuilder.CreateIndex(
                name: "IX_Solutions_ProblemId",
                table: "Solutions",
                column: "ProblemId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_CompanyMachineId",
                table: "Tickets",
                column: "CompanyMachineId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_ProblemId",
                table: "Tickets",
                column: "ProblemId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_UserId",
                table: "Tickets",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_users_CompanyId",
                table: "users",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_WorkingOnTickets_TicketId",
                table: "WorkingOnTickets",
                column: "TicketId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DepartmentEmployees");

            migrationBuilder.DropTable(
                name: "Solutions");

            migrationBuilder.DropTable(
                name: "WorkingOnTickets");

            migrationBuilder.DropTable(
                name: "Tickets");

            migrationBuilder.DropTable(
                name: "CompanyMachines");

            migrationBuilder.DropTable(
                name: "Problems");

            migrationBuilder.DropTable(
                name: "users");

            migrationBuilder.DropTable(
                name: "Machines");

            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
