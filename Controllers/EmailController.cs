using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using MimeKit.Utils;

namespace Project_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private Customer customer;
        private Ticket ticket;
        private User user;
        [HttpPost]
        public IActionResult SendEmail()
        {
            // dummy data
            customer = new Customer();
            customer.Name = "Sisi";
            customer.Email = "julius.carroll@ethereal.email";
            customer.Phone = "0612345678";
            customer.Company = new Company();
            customer.Company.Name = "Group";
            ticket = new Ticket();
            ticket.Date = DateTime.Today;
            ticket.Status = "New";
            ticket.Priority = "High";
            ticket.Problem = new Problem();
            ticket.Problem.Machine = new Machine();
            ticket.Problem.Machine.Name = "Machine 3";
            ticket.Problem.Description = "Gewoon laa";
            user = new User();
            user.Name = "Viscon medewerker";

            // display date pretty; do not delete
            var date = $"{ticket.Date.Day}/{ticket.Date.Month}/{ticket.Date.Year}";


            var email = new MimeMessage();
            var builder = new BodyBuilder();

            // email and password are credentials for gmail account
            var emailAddress = "bedrijfviscon@gmail.com";
            // var password = "zft4Zc1C484C1Ugv2c"; passsword for google account
            var password = "rmxnpgsdrgggnmky";

            email.From.Add(new MailboxAddress("Viscon", emailAddress));
            email.To.Add(new MailboxAddress(customer.Name, customer.Email));
            email.Subject = $"{customer.Name} has made a new ticket!";

            // email with image
            var images = new string[] {
                "ClientApp/src/assets/viscon.png",
                "ClientApp/src/assets/viscon.png",
                "ClientApp/src/assets/viscon.png",
                "ClientApp/src/assets/viscon.png",
                "ClientApp/src/assets/viscon.png",
                "ClientApp/src/assets/viscon.png"
            };
            MimeEntity image;
            string imageList = "";
            for (int i = 0; i < images.Length; i++)
            {
                image = builder.LinkedResources.Add(images[i]);
                image.ContentId = MimeUtils.GenerateMessageId();
                imageList += $"<img src='cid:{image.ContentId}' alt='' style='height:8rem;width:8rem;margin:0.5rem'>";
            }


            // Set the html version of the message text
            builder.HtmlBody = string.Format(@"
                <div class='EmailBody'>
                    <div style='padding: 0.75rem'>
                        <h1>Hello " + user.Name + @"!</h1>
                        <p>You have received a new ticket!</p>
                        <span>This problem was reported at: " + date + @"</span>
                        <p>Status: " + ticket.Status + @"</p>
                        <p>Priority: " + ticket.Priority + @"</p>
                        <br>
                        <h2>User Information</h2>
                        <p>User: " + customer.Name + @"</p>
                        <p>Email: " + customer.Email + @"</p>
                        <p>Phone number: " + customer.Phone + @"</p>
                        <p>Group: " + customer.Company.Name + @"</p>
                        <br>
                        <h2>Problem</h2>
                        <p>Problem Type: " + ticket.Problem.Machine.Name + @"</p>
                        <p>Problem Description: " + ticket.Problem.Description + @"</p>
                        <div>"
                            + imageList +
                        @"</div>
                        <hr>
                        <p><i><center>This is an automatically generated email. Replies to this email address are not monitored</center></i></p>
                    </div>
                </div>");

            email.Body = builder.ToMessageBody();

            // sends email
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(emailAddress, password);
            smtp.Send(email);
            smtp.Disconnect(true);

            return Ok();
        }
    }
}
