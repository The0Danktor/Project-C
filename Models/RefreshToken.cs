using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_C.Models
{
    public class RefreshToken
    {
        Guid Id { get; set; }
        string Token { get; set; } = string.Empty;
        DateTime Created { get; set; }
        DateTime Expires { get; set; }
        bool IsExpired => DateTime.UtcNow >= Expires;
        bool IsActive => !IsExpired;
    }
}