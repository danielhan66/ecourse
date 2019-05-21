using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCourse.Services.Dto;
using eCourse.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eCourse.Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private IAuthorService _authorService;
        public AuthorsController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AuthorDto>> Get()
        {
            return _authorService.GetAuthors();
        }

        [HttpGet("{id}")]
        public ActionResult<AuthorDto> Get(int id)
        {
            return _authorService.GetAuthorDtoById(id);
        }
    }
}