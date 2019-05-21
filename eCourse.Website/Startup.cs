using eCourse.Data;
using eCourse.Data.Model;
using eCourse.Services.Implementations;
using eCourse.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;

namespace eCourse
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CourseDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("eCourseDBConnection")));
            services.AddTransient(typeof(IAuthorService), typeof(AuthorService));
            services.AddTransient(typeof(ICourseService), typeof(CourseService));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2).AddJsonOptions(
                options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });

            using (var dbContext = new CourseDBContext(new DbContextOptionsBuilder<CourseDBContext>().UseSqlServer(Configuration.GetConnectionString("eCourseDBConnection")).Options))
            {
                dbContext.Database.EnsureCreated();

                var author = dbContext.Courses.FirstOrDefaultAsync().Result;
                if (author == null)
                {
                    dbContext.Authors.Add(new Data.Model.Author { Name = "Rowan Atkinson", Courses = new List<Course> { new Course { Title = "Math", Description = "Math II" } } });
                    dbContext.Authors.Add(new Data.Model.Author { Name = "Tom Hanks", Courses = new List<Course> { new Course { Title = "C#", Description = "C# programming" } } });
                }
                dbContext.SaveChanges();
            }
        }
    }
}
