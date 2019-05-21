using eCourse.Services.Dto;
using eCourse.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eCourse.Website.UnitTests
{
    public class CourseServiceFake : ICourseService
    {
        public async Task<bool> DeleteCourse(int courseId)
        {
            await Task.Delay(1000);

            return true;
        }

        public async Task<CourseDto> GetCourseById(int id)
        {
            await Task.Delay(1000);

            return new CourseDto {
             Title = "course 1"};
        }

        public async Task<List<CourseDto>> GetCourses()
        {
            await Task.Delay(1000);

            return new List<CourseDto>{
                    new CourseDto{
                        Title = "course 1"
                    },
                    new CourseDto{
                        AuthorName = "course 2"
                    },
                };
        }

        public async Task<bool> SaveCourse(CourseDto courseDto)
        {
            await Task.Delay(1000);

            return true;
        }

        public async Task<List<CourseDto>> SearchCourses(string searchText)
        {
            await Task.Delay(1000);

            return new List<CourseDto>{
                    new CourseDto{
                        Title = "course 1"
                    },
                    new CourseDto{
                        AuthorName = "course 2"
                    },
                };
        }
    }
}
