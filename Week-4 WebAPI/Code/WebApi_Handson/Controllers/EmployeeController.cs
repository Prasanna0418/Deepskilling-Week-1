using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi_Ex.Filters;
using WebApi_Ex.Models;

namespace WebApi_Ex.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new();

        public EmployeeController()
        {
            if (!employees.Any())
            {
                employees = GetStandardEmployeeList();
            }
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(1990, 1, 1),
                    Department = new Department { Id = 1, Name = "HR" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "Communication" },
                        new Skill { Id = 2, Name = "Teamwork" }
                    }
                },
                new Employee
                {
                    Id = 2,
                    Name = "Jane",
                    Salary = 60000,
                    Permanent = false,
                    DateOfBirth = new DateTime(1992, 5, 10),
                    Department = new Department { Id = 2, Name = "IT" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "C#" },
                        new Skill { Id = 4, Name = "ASP.NET" }
                    }
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }



        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Employee> Post(Employee emp)
        {
            employees.Add(emp);
            return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
        }
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Employee> Put(int id, Employee updated)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound("Employee not found");

            emp.Name = updated.Name;
            emp.Salary = updated.Salary;
            emp.Permanent = updated.Permanent;
            emp.DateOfBirth = updated.DateOfBirth;
            emp.Department = updated.Department;
            emp.Skills = updated.Skills;

            return Ok(emp);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid employee id");

            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound($"Employee with id {id} not found");

            employees.Remove(emp);
            return Ok($"Employee with id {id} has been deleted");
        }

    }
}
