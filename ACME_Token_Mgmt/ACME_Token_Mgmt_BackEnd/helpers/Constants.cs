using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ACME_Token_Mgmt_BackEnd.helpers
{
    public static class Constants
    {
        public enum VerifyToken
        {
            NotFound =0,
            Invalid,
            Expired,
            Valid
        }

        public enum LoginResult
        {
            InvalidUserNamePassword,
            InvalidInput,
            Valid
        }
    }
}
