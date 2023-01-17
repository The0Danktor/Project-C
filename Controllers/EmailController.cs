using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;

namespace Project_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendEmail(string body)
        {
            // var user = new Customer();

            var email = new MimeMessage();

            // email and password are credentials for gmail account
            var emailAddress = "bedrijfviscon@gmail.com";
            // var password = "zft4Zc1C484C1Ugv2c"; passsword for google account
            var password = "rmxnpgsdrgggnmky";

            email.From.Add(new MailboxAddress("Viscon", emailAddress));
            email.To.Add(new MailboxAddress("Viscon", "sisi_pang@hotmail.nl"));
            email.Subject = "User has made a new ticket!";
            var multipart = new Multipart("mixed");

            using (StreamReader SourceReader = System.IO.File.OpenText("Files/MailTemplate.html"))
            {
                multipart.Add(new TextPart(TextFormat.Html) { Text = SourceReader.ReadToEnd() });
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
