using eCourse.Data.Model;
using eCourse.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace eCourse.Services.Interfaces
{
    public interface ICourseService
    {
        Task<List<CourseDto>> GetCourses();
        Task<List<CourseDto>> SearchCourses(string searchText);
        Task<CourseDto> GetCourseById(int id);
        Task<Boolean> SaveCourse(CourseDto courseDto);
        Task<Boolean> DeleteCourse(int courseId);
    }
}
