using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using ACME_Token_Mgmt_BackEnd.Entities;
using ACME_Token_Mgmt_BackEnd.helpers;

namespace ACME_Token_Mgmt_BackEnd.Repositories
{
    public interface ITokenManager
    {
        Token GenerateToken();
        Constants.VerifyToken ValidateToken(Token token);
        Token ChangeTokenState(Token token);
        List<Token> GetAllTokens();
        Constants.LoginResult AuthenticateAdmin(string userName,string password);
    }
}
