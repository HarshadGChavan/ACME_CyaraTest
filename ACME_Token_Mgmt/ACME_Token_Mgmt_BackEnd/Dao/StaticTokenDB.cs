using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACME_Token_Mgmt_BackEnd.Entities;

namespace ACME_Token_Mgmt_BackEnd.Dao
{
    public static class StaticTokenDB
    {
        public static List<Token> Tokens = new List<Token>()
        {  
            new Token()
            {token="TestToken1",Active=true,ExpiryDate=DateTime.Now.AddMinutes(5)}
        };
    }
}
