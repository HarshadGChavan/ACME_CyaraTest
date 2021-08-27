using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ACME_Token_Mgmt_BackEnd.DTOs;
using ACME_Token_Mgmt_BackEnd.Infra;
using ACME_Token_Mgmt_BackEnd.Repositories;
using Microsoft.Extensions.Logging;
using ACME_Token_Mgmt_BackEnd.Entities;

namespace ACME_Token_Mgmt_BackEnd.Controllers
{

    [Route("api/token/validate")]
    [ApiController]
    public class TokenValidateController : ControllerBase
    {

        private readonly ILogger<TokenValidateController> _logger;
        private readonly ITokenManager tokenManager;

        public TokenValidateController(ILogger<TokenValidateController> logger, ITokenManager tokenManager)
        {
            _logger = logger;
            this.tokenManager = tokenManager;
        }

        [HttpPost]
        public IActionResult Post(Token token)
        {             
            var resultValidate = tokenManager.ValidateToken(token);

            switch (resultValidate)
            {
                case helpers.Constants.VerifyToken.NotFound:
                    return NotFound("Provided token not found");
                case helpers.Constants.VerifyToken.Invalid:
                    return BadRequest("Please provide valid Token.");
                case helpers.Constants.VerifyToken.Expired:
                    return Unauthorized("Token Expired");
                case helpers.Constants.VerifyToken.Valid:
                    return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError); 
        }
    }
}
