using ApplicationCore.Entities;
using Infrastructure.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class EmployeeService
    {
        EmployeesRepo employeesRepo;
        public EmployeeService()
        {
            employeesRepo = new EmployeesRepo();
            
        }
        public void GetAllEmps()
        {
            IEnumerable<Employees> res = employeesRepo.GetAll();
            foreach (var emp in res)
            {
                Console.WriteLine($"{emp.Id},{emp.FirstName},{emp.LastName},{emp.Salary},{emp.DeptId}");
            }
        }
        public Employees GetEmpById()
        {
            Console.Write("enter id: ");
            int id = Convert.ToInt32(Console.ReadLine());
            Employees employees = employeesRepo.GetById(id);
            return employees;
        }
        public void UpdateEmployee()
        {
            var em = GetEmpById();
            Console.Write("Enter New first Name: ");
            em.FirstName = Console.ReadLine();
            Console.Write("Enter New last Name: ");
            em.LastName = Console.ReadLine();
            Console.Write("Enter salary: ");
            em.Salary = Convert.ToDecimal(Console.ReadLine());

            employeesRepo.Update(em);
        }
        public void DeleteById()
        {
            Console.Write("enter the id to delete: ");
            int id = Convert.ToInt32(Console.ReadLine());
            if (employeesRepo.DeleteById(id) > 0)
            {
                Console.Write("delete successfully");
            }
            else
            {
                Console.Write("didnt find this employees");
            }
        }
        public void AddEmployee()
        {
            Employees e = new Employees();
            Console.Write("enter firstname: ");
            e.FirstName = Console.ReadLine();
            Console.Write("enter lastname: ");
            e.LastName = Console.ReadLine();
            Console.Write("enter salary: ");
            e.Salary = Convert.ToDecimal(Console.ReadLine());
            Console.Write("enter department id: ");
            e.DeptId = Convert.ToInt32(Console.ReadLine());

            if (employeesRepo.Insert(e) > 0)
            {
                Console.Write("successfuly");
            }
            else
            {
                Console.Write("failed");
            }
        }
    }
}
