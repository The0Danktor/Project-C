using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_C.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "kCOKueVOkFQf+mLOnUZIKNkBQojUZsnQEKDzKSEJd6uz6iVc5W6fJDjb74GtdRCUtaaFjVDr9MzHdjPPSbrg9Q==", "qxerB4ItAgkbV3kH494BvXkBYfrS3mqrjjbRgFTDAQSgLAej3YZ4gBEw+bOT8KtI/p5SAIP+/fqmGiR1MIsIMObll097VP3XJQ+ac6zR2oTV7LHBld1xQHTVJW5Ll0cuzXafJTEcS3MuWwL09c/Xpk5snPKpuXJbq2pa0IYY184=" });

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
                values: new object[] { new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"), new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"), "admin@evil.inc", "Evil Incorperated Admin", "0666666666", false, 2, "87dYP1Ekedrx56cAke9vQF+NpOqCYOzWnIU0RHCv4A7Eq/uEDH1npPC3r55hjQP68nbtwjebRvYo9Zks7kxugQ==", "DTDz/5UMpHGF2ZYf2TciJ9NfmJq36eP+E9SWavQKy/UXC3WVPYirug5C6j9cF3XBX4PCn14PBz0qRJk/9cnWHVUVN7Tu4G8Gvx23Fn4vJ5NPMM6rjX+IIo8MMCWLY1GOviQwT6OlRNyBoFj4Fz6x9i44rEH5z6PB7/t/M0JL7OA=" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("12c775f8-8519-4026-ba68-bf537a705be4"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("747688bb-efe1-48f0-97e2-c2d1304a6937"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("7bf1c1b5-4e6c-4c64-8afa-3a6c9f7e645e"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("8c704127-a9bf-421f-94c0-0ff9bafa576b"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("b23c45bd-f115-44e3-a7a8-fea2f2dfd2a0"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("ef698064-818f-4087-9219-f851dc99bc73"));

            migrationBuilder.DeleteData(
                table: "CompanyMachines",
                keyColumn: "Id",
                keyValue: new Guid("f1e2d95c-28f1-4f1a-8869-eb5848569e0d"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("0ae4cdbc-ea79-4d21-9e4a-71ccbbe5e962"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("10eb6942-c2c8-4d06-a776-d6c276c8c373"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("3d29a985-3d1a-4a71-aeae-f805ba191a3f"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("4f808a05-543d-424d-a5ee-d30ad9b64534"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("9853d965-8a10-4630-9adf-9fa0d3827dea"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("b96ce683-8386-4045-8c3f-3b60fc664d82"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("c7db4f37-9093-42ef-8649-9c0715d39fb4"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("d1c14e9e-3727-4f07-b39a-09f6287eb3b2"));

            migrationBuilder.DeleteData(
                table: "Solutions",
                keyColumn: "Id",
                keyValue: new Guid("f0404b74-3222-4563-8e6c-8278bc63905e"));

            migrationBuilder.DeleteData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("ff094bc3-afc2-4a68-9cdf-8fd532c944ee"));

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: new Guid("4ef766d3-06cb-4ebd-8152-01498f38c5c2"));

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: new Guid("523e4162-d992-46c2-a774-d831b8aa007c"));

            migrationBuilder.DeleteData(
                table: "Companies",
                keyColumn: "Id",
                keyValue: new Guid("a26e9461-b21d-4ed3-86c9-b0f66ce2e3eb"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("1b4f5865-c09e-4e6e-b064-39d40fcc982a"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("8ab30926-44f5-4ff2-a3b4-6c66754b74ad"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("e7b41288-5aa1-4839-9698-ebcb3623ea4d"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("030acb51-2100-47d3-99c9-2e920360c67d"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("0c9d60f7-6e4c-4e09-88c0-9c0030070874"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("1bc3c350-d72e-4fb6-9a41-7899b8797135"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("43216e47-c66c-459d-b633-76d9043d0fce"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("5c2cb042-979d-4be1-a12e-98873145fdb2"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("602c8e1a-2ccc-42f4-9698-713bdfbe328e"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("8b2942a0-bc67-4320-8a9b-38338ac172cb"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("c58f310e-df55-483b-9372-3741ae27d788"));

            migrationBuilder.DeleteData(
                table: "Problems",
                keyColumn: "Id",
                keyValue: new Guid("f6ea123c-c3e3-48f6-bf6f-271cefdbd734"));

            migrationBuilder.DeleteData(
                table: "Departments",
                keyColumn: "Id",
                keyValue: new Guid("9f7eda86-6364-4cec-9165-e560e50bb6e0"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("28bc6ee4-e11f-4c49-91e2-e0c0e713ee46"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("2d965a8b-b874-4066-a10e-d4c84a62afdb"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("50188d9d-cd82-470f-a98d-d815e744e64f"));

            migrationBuilder.DeleteData(
                table: "Machines",
                keyColumn: "Id",
                keyValue: new Guid("b49f3dae-a99b-4aa6-ac95-c7ce664251db"));

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "Id",
                keyValue: new Guid("1d368a7d-d818-4464-8fe6-f2f1d7ce7b6f"),
                columns: new[] { "passwordHash", "passwordSalt" },
                values: new object[] { "BXtG8Y6JRNcuQ3/WKpvRrtP+K5z+KVMoUCuYzmAuCUApozZs/cIZBRN699iZN15HUo1NPu/tYVzRXBhjSzELKQ==", "SVrCkvF3Xu4IOvBr/OqccTBDs10Cd/s5yCoDaiDvahf3s7e7nXnFqlF7te6L9a+k9930Dz3KkxiFz36pGeTYs66kJw/ZW4L38kgRi1pdTpAkWX5vhyOorurbQIg0G1Gs4m3MFQGOw7YrPQnohM4CFE0k2934xIQvCzXfpjwFPuk=" });
        }
    }
}
