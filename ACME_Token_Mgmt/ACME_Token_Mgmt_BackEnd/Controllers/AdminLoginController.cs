using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ACME_Token_Mgmt_BackEnd.DTOs;
using ACME_Token_Mgmt_BackEnd.Infra;
using ACME_Token_Mgmt_BackEnd.Repositories;

namespace ACME_Token_Mgmt_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminLoginController : ControllerBase
    {
        private readonly ILogger<AdminLoginController> _logger;
        private readonly ITokenManager tokenManager;

        public AdminLoginController(ILogger<AdminLoginController> logger,ITokenManager tokenManager)
        {
            _logger = logger;
            this.tokenManager = tokenManager;
        }

        [HttpPost]
        public IActionResult post(AdminLoginDTO adminLoginDTO)
        {
            var resultLogin = tokenManager.AuthenticateAdmin(adminLoginDTO.username, adminLoginDTO.Password);

            switch (resultLogin)
            {
                case helpers.Constants.LoginResult.InvalidInput:
                    return BadRequest("Please provide valid input.");
                case helpers.Constants.LoginResult.InvalidUserNamePassword:
                    return BadRequest("Please provide valid UserName/Password.");
                case helpers.Constants.LoginResult.Valid:
                    return Ok();
            }
            return NotFound();
        }
    }
}
