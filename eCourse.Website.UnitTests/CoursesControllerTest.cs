using eCourse.Controllers;
using eCourse.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace eCourse.Website.UnitTests
{
    public class CoursesControllerTest
    {
        CoursesController _controller;
        ICourseService _service;

        public CoursesControllerTest()
        {
            _service = new CourseServiceFake();
            _controller = new CoursesController(_service);
        }

        [Fact]
        public void Get_NoSearchString_Returns()
        {
            // Act
            var result = _controller.Get(null).Result;

            // Assert
            Assert.True(result.Value.Count() == 2);
        }

        [Fact]
        public void Get_WithSearchString_Returns()
        {
            var result = _controller.Get(null).Result;

            Assert.True(result.Value.Count() == 2);
        }

        [Fact]
        public void UpdateCourse_ValidCourse_ReturnsOkResult()
        {
            var result = _controller.UpdateCourse(new Services.Dto.CourseDto { CourseId = 1, Title = "c#" }).Result;

            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public void UpdateCourse_InvalidCourse_ReturnsBadRequest()
        {
            var result = _controller.UpdateCourse(new Services.Dto.CourseDto { Title = "c#" }).Result;

            Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public void CreateCourse_ValidCourse_ReturnsOkResult()
        {
            var result = _controller.CreateCourse(new Services.Dto.CourseDto { CourseId = 0, Title = "c#" }).Result;

            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public void CreateCourse_InvalidCourse_ReturnsBadRequest()
        {
            var result = _controller.CreateCourse(new Services.Dto.CourseDto { CourseId = 1, Title = "c#" }).Result;

            Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public void DeleteCourse_ReturnsOkResult()
        {
            var result = _controller.DeleteCourse(1).Result;

            Assert.IsType<OkObjectResult>(result);
        }
    }
}
