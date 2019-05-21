using eCourse.Data;
using eCourse.Data.Model;
using eCourse.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using eCourse.Services.Dto;

namespace eCourse.Services.Implementations
{
    public class AuthorService : IAuthorService
    {
        private CourseDBContext _dbContext;
        public AuthorService(CourseDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<AuthorDto> GetAuthors()
        {
            return _dbContext.Authors.Select(a => new AuthorDto { Id = a.Id, Name = a.Name, Pic = a.Pic }).ToList();
        }

        public async Task<Author> GetAuthorById(int authorId)
        {
            return await _dbContext.Authors.FindAsync(authorId);
        }

        public AuthorDto GetAuthorDtoById(int authorId)
        {
            return _dbContext.Authors.Select(a => new AuthorDto { Id = a.Id, Name = a.Name, Pic = a.Pic }).SingleOrDefault(a => a.Id == authorId);
        }
    }
}