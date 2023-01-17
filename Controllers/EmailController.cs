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
        [HttpPost]
        public IActionResult SendEmail()
        {
            var user = new Customer();
            var ticket = new Ticket();
            var date = $"{ticket.Date.Day}/{ticket.Date.Month}/{ticket.Date.Year}";

            var email = new MimeMessage();
            var builder = new BodyBuilder();

            // email and password are credentials for gmail account
            var emailAddress = "bedrijfviscon@gmail.com";
            // var password = "zft4Zc1C484C1Ugv2c"; passsword for google account
            var password = "rmxnpgsdrgggnmky";

            email.From.Add(new MailboxAddress("Viscon", emailAddress));
            email.To.Add(new MailboxAddress(user.Name, user.Email));
            email.Subject = $"{user.Name} has made a new ticket!";
            var multipart = new Multipart("mixed");

            var image = @"ClientApp/src/assets/viscon.png";
            using (StreamReader SourceReader = System.IO.File.OpenText("Files/MailTemplate.html"))
            {
                // multipart.Add(new TextPart(TextFormat.Html) { Text = SourceReader.ReadToEnd() });
                multipart.Add(new TextPart(TextFormat.Html)
                {
                    Text = @"
                <div class='EmailBody'>
                    <div style='padding: 0.75rem'>
                        <h1>Hello " + emailAddress + @"!</h1>
                            <p>You have received a new ticket!</p>
                            <span>This problem was reported at: " + date + @"</span>
                            <p>Status: " + ticket.Status + @"</p>
                            <p>Priority: " + ticket.Priority + @"</p>
                            <br>
                            <h2>User Information</h2>
                            <p>User: " + user.Name + @"</p>
                            <p>Email: " + user.Email + @"</p>
                            <p>Phone number: " + user.Phone + @"</p>
                            <p>Group: " + user.Supervisor + @"</p>
                            <br>
                            <h2>Problem</h2>
                            <p>Problem Type: " + ticket.Problem.Machine.Name + @"</p>
                            <p>Problem Description</p>
                            <p>" + ticket.Problem.Description + @"</p>
                            <div style='border-width: 2px;background-repeat: no-repeat;margin: 0.5rem;height: 8rem;width: 8rem;
                            border-radius: 1.5rem;overflow: hidden;background-position: center;'>
                                <img src='" + image + @"' alt=''>
                            </div>
                            <hr>
                            <p><i><center>This is an automatically generated email. Replies to this email address are not monitored</center></i></p>
                        </div>
                    </div>
                </div>"
                });
            }
            email.Body = multipart;
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
