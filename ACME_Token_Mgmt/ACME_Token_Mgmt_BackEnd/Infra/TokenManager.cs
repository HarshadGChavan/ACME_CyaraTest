using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ACME_Token_Mgmt_BackEnd.Entities;
using ACME_Token_Mgmt_BackEnd.Repositories;
using ACME_Token_Mgmt_BackEnd.Dao;
using ACME_Token_Mgmt_BackEnd.helpers;

namespace ACME_Token_Mgmt_BackEnd.Infra
{
    public class TokenManager : ITokenManager
    {
        public Constants.LoginResult AuthenticateAdmin(string userName, string password)
        {
            if (String.IsNullOrWhiteSpace(userName) &&
                String.IsNullOrWhiteSpace(password) )
                return Constants.LoginResult.InvalidInput;
            if(userName.ToLower() != "admin" ||
               password != "admin@123")
                return Constants.LoginResult.InvalidUserNamePassword;
            return Constants.LoginResult.Valid;
        }

        public Token GenerateToken()
        {
            var valToken = Guid.NewGuid().ToString();
            Token token = new Token()
            {
                token = valToken,
                ExpiryDate = System.DateTime.Now.AddMinutes(5),
                Active = true
                //Expired = false
        };
            StaticTokenDB.Tokens.Add(token);
            return token;
        }

        public Token ChangeTokenState(Token token)
        {
            var updatetoken = StaticTokenDB.Tokens.FirstOrDefault(x => x.token == token.token);
            updatetoken.Active = token.Active;
            if(updatetoken.Active)
                updatetoken.ExpiryDate = System.DateTime.Now.AddMinutes(5);
            else
                updatetoken.ExpiryDate = System.DateTime.Now;
            return updatetoken;
        }

        public List<Token> GetAllTokens()
        {
            //return StaticTokenDB.Tokens.Where(x => x.Active 
            // && x.ExpiryDate > DateTime.Now).ToList();
            foreach (var item in StaticTokenDB.Tokens)
            {
                if (item.ExpiryDate < System.DateTime.Now)
                {
                    //item.Expired = true;
                    item.Active = false;
                }
            }
            return StaticTokenDB.Tokens;
        }

        public Constants.VerifyToken ValidateToken(Token token)
        {
            var tokenToVerify = StaticTokenDB.Tokens.FirstOrDefault(x => x.token == token.token);
            if (tokenToVerify == null)
                return Constants.VerifyToken.NotFound;
            
            if (tokenToVerify.ExpiryDate < DateTime.Now)
                return Constants.VerifyToken.Expired;

            if (!tokenToVerify.Active)
                return Constants.VerifyToken.Invalid;

            return Constants.VerifyToken.Valid;
        }
    }
}
