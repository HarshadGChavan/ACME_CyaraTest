using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ACME_Token_Mgmt_BackEnd.DTOs
{
    public class AdminLoginDTO
    {
        [Required]
        public string username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}

