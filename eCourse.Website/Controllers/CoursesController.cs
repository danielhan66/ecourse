using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCourse.Data.Model;
using eCourse.Services.Dto;
using eCourse.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eCourse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private ICourseService _courseService;
        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDto>>> Get(string search)
        {
            if (!string.IsNullOrWhiteSpace(search))
                return await _courseService.SearchCourses(search);
            else
                return await _courseService.GetCourses();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDto>> Get(int id)
        {
            return await _courseService.GetCourseById(id);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourse(int id)
        {
            return Ok(await _courseService.DeleteCourse(id));
        }

        [HttpPost]
        public async Task<ActionResult> UpdateCourse([FromBody]CourseDto course)
        {
            if (course.CourseId > 0)
            {
                return Ok(await _courseService.SaveCourse(course));
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<ActionResult> CreateCourse(CourseDto course)
        {
            if(course.CourseId == 0)
            {
                return Ok(await _courseService.SaveCourse(course));
            }
            else
            {
                return BadRequest();
            }
        }
    }
}