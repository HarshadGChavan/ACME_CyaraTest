using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ACME_Token_Mgmt_BackEnd.Repositories;
using Microsoft.Extensions.Logging;
using ACME_Token_Mgmt_BackEnd.Entities;

namespace ACME_Token_Mgmt_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly ILogger<TokenController> _logger;
        private readonly ITokenManager tokenManager;

        public TokenController(ILogger<TokenController> logger, ITokenManager tokenManager)
        {
            _logger = logger;
            this.tokenManager = tokenManager;
        }

        //.... Get list of tokens
        [HttpGet]
        public IActionResult Get()
        {

            return Ok();
        }

        //.... Generate token operation
        [HttpPost]
        public IActionResult Post()
        {
            return Ok();
        }

        //.... Update token operation
        [HttpPut]
        public IActionResult Put(Token token)
        {
            return Ok();
        }
    }
}
