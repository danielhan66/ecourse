using System;
using System.Collections.Generic;
using System.Text;

namespace eCourse.Data.Model
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Pic { get; set; }
        public List<Course> Courses { get; set; }
    }
}
