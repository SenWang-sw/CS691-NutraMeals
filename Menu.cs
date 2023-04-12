using ApplicationCore.Entities;
using Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DapperTrial.Menu
{
    public class MenuSelection
    {
        EmployeeService e = new EmployeeService();
        public void Run()
        {
            Console.Write("if you want to read data enter 1 \nif you want to modify data enter 2 \nenter anynum quit\n");
            var input1 = Convert.ToInt32(Console.ReadLine());
            if(input1 == 1)
            {
                Console.Write("enter 1: get all employees \nenter 2: get employee by id \n");
                var input2 = Convert.ToInt32(Console.ReadLine());
                if(input2 == 1)
                {
                    e.GetAllEmps();
                }else if(input2 == 2)
                {
                    Employees ee = e.GetEmpById();
                    Console.Write($"{ee.FirstName},{ee.LastName},{ee.Salary},{ee.DeptId}");
                }

            }else if (input1 == 2)
            {
                Console.Write("enter 1:add employee \nenter 2: delete employee \nenter 3: update employee\n");
                var input3 = Convert.ToInt32(Console.ReadLine());
                if(input3 == 1)
                {
                    e.AddEmployee();
                }else if (input3 == 2)
                {
                    e.DeleteById();
                }else if(input3 == 3)
                {
                    e.UpdateEmployee();
                }
            }
            else
            {
                Console.WriteLine("quit");
            }
           
        }
    }
}
