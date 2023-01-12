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

            // email and password are credentials generated by ethereal.email
            var emailAddress = "alessandro7@ethereal.email";
            var password = "GeVuPxMzy6cbu3swWu";
            
            email.From.Add(MailboxAddress.Parse(emailAddress));
            email.To.Add(MailboxAddress.Parse(emailAddress));
            email.Subject = "Test";
            var multipart = new Multipart("mixed");
            // multipart.Add(new TextPart(TextFormat.Html) { Text = "<h1>Yes, Hello!. This is dog!.</h1>" });
            using (StreamReader SourceReader = System.IO.File.OpenText("Files/MailTemplate.html"))
            {
                // builder.HtmlBody = SourceReader.ReadToEnd();
                multipart.Add(new TextPart(TextFormat.Html) { Text = SourceReader.ReadToEnd() });
            }
            email.Body = multipart;

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.ethereal.email", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate(emailAddress, password); // email and password
            smtp.Send(email);
            smtp.Disconnect(true);

            return Ok();
        }
    }
}