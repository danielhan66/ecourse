using System;
using System.Collections.Generic;
using System.Text;

namespace eCourse.Services.Dto
{
    public class CourseDto
    {
        public int CourseId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AuthorId { get; set; }
        public string AuthorName { get; set; }

        public string AuthorPic { get; set; }

    }
}
