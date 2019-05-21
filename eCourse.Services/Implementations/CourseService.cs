using eCourse.Data;
using eCourse.Data.Model;
using eCourse.Services.Dto;
using eCourse.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCourse.Services.Implementations
{

    public class CourseService : ICourseService
    {
        private CourseDBContext _dbContext;
        private IAuthorService _authorService;
        public CourseService(CourseDBContext dbContext, IAuthorService authorService)
        {
            _dbContext = dbContext;
            _authorService = authorService;
        }

        public async Task<List<CourseDto>> GetCourses()
        {
            return await _dbContext.Courses.Include(c => c.Author).Where(c => !c.Deleted).Select(c => new CourseDto { CourseId = c.Id, Title = c.Title, Description = c.Description, AuthorName = c.Author.Name, AuthorPic = (c.Author.Pic??"dummy.gif")}).ToListAsync();
        }

        public async Task<CourseDto> GetCourseById(int id)
        {
            var course = await _dbContext.Courses.Include(c => c.Author).SingleOrDefaultAsync(c => c.Id == id);
            if(course != null)
            {
                var courseDto = new CourseDto {
                    CourseId = course.Id,
                    Title = course.Title,
                    Description = course.Description
                };

                if (course.Author != null)
                {
                    courseDto.AuthorId = course.Author.Id.ToString();
                    courseDto.AuthorName = course.Author.Name;
                    courseDto.AuthorPic = course.Author.Pic;
                }

                return courseDto;
            }

            return null;
        }

        public async Task<Boolean> SaveCourse(CourseDto courseDto)
        {
            Author author = null;
            int authorId;

            if (!string.IsNullOrWhiteSpace(courseDto.AuthorId) && Int32.TryParse(courseDto.AuthorId, out authorId))
            {
                author = await _authorService.GetAuthorById(authorId);
            }

            if(courseDto.CourseId > 0)  // update a course
            {
                var course = _dbContext.Courses.Find(courseDto.CourseId);
                course.Title = courseDto.Title;
                course.Description = courseDto.Description;
                course.Author = author;
                _dbContext.Courses.Update(course);

            }
            else  // add a course
            {
                var course = new Course
                {
                    Title = courseDto.Title,
                    Description = courseDto.Description,
                    Author = author
                };
                await _dbContext.Courses.AddAsync(course);
            }

            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<Boolean> DeleteCourse(int courseId)
        {
            var course = _dbContext.Courses.Find(courseId);
            course.Deleted = true;
            var updatedCourse = _dbContext.Courses.Update(course);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<List<CourseDto>> SearchCourses(string searchText)
        {
            return await _dbContext.Courses.Include(c => c.Author).Where(c => !c.Deleted && (c.Title.Contains(searchText) || c.Description.Contains(searchText) || c.Author.Name.Contains(searchText))).Select(c => new CourseDto { CourseId = c.Id, Title = c.Title, Description = c.Description, AuthorName = c.Author.Name, AuthorPic = (c.Author.Pic??"dummy.gif") }).ToListAsync();
        }
    }
}
