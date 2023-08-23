using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using API.DBContext;
using API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Testing.Model;

namespace Testing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountTypeController : BaseAPIController<AccountType>
    {
        private readonly ApplicationDbContext _context;
        public AccountTypeController(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        [Route("TestingGet")]
        public async Task<ActionResult> TestingGet(string id)
        {
            var data = await _context.Users.ToListAsync();
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

    }
}