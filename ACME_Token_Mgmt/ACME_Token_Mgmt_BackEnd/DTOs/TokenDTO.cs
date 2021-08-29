using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACME_Token_Mgmt_BackEnd.DTOs
{
    public class TokenDTO
    {
        public string token { get; set; }
        public string expiry { get; set; }
        public bool active { get; set; }
        //public bool expired { get; set; }
    }
}
