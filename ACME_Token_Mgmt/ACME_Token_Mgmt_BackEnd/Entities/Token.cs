using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ACME_Token_Mgmt_BackEnd.Entities
{
    public class Token
    {
        public string token { get; set; }
        public DateTime ExpiryDate { get; set; }
        public bool Active { get; set; }
        //public bool Expired { get; set; }
    }
}

