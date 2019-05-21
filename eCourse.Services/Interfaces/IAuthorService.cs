using eCourse.Data.Model;
using eCourse.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eCourse.Services.Interfaces
{
    public interface IAuthorService
    {
        List<AuthorDto> GetAuthors();
        Task<Author> GetAuthorById(int authorId);
        AuthorDto GetAuthorDtoById(int authorId);
    }
}
