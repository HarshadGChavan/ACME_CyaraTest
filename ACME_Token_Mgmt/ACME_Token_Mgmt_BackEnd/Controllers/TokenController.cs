using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ACME_Token_Mgmt_BackEnd.Repositories;
using Microsoft.Extensions.Logging;
using ACME_Token_Mgmt_BackEnd.Entities;
using AutoMapper;
using ACME_Token_Mgmt_BackEnd.DTOs;

namespace ACME_Token_Mgmt_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly ILogger<TokenController> _logger;
        private readonly ITokenManager tokenManager;
        private readonly IMapper mapper;

        public TokenController(ILogger<TokenController> logger, ITokenManager tokenManager,IMapper mapper)
        {
            _logger = logger;
            this.tokenManager = tokenManager;
            this.mapper = mapper;
        }

        //.... Get list of tokens
        [HttpGet]
        public ActionResult<List<Token>> Get()
        {
            var resultTokens = tokenManager.GetAllTokens();
            List<TokenDTO> finalTokens =
                mapper.Map<List<Token>, List<TokenDTO>>(resultTokens);
            return Ok(finalTokens);
        }

        //.... Generate token operation
        [HttpPost]
        public ActionResult<Token> Post()
        {
            var resultToken = tokenManager.GenerateToken();
            return Ok(resultToken);
        }

        //.... Update token operation
        [HttpPut]
        public ActionResult<Token> Put(Token token)
        {
            var resultToken = tokenManager.ChangeTokenState(token);
            return Ok(resultToken);
        }
    }
}
