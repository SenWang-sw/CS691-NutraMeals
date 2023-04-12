using ApplicationCore.Contracts.Repos;
using ApplicationCore.Entities;
using Dapper;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repos
{
    public class EmployeesRepo : IRepo<Employees>
    {
        private readonly DapperDBContext _dbContext;
        public EmployeesRepo()
        {
            _dbContext = new DapperDBContext();
        }

        public int DeleteById(int id)
        {
           
            using (IDbConnection conn = _dbContext.GetConnection())
            {
                
                return conn.Execute("delete from employees where id = @id", new { id = id });
            }

        }

        public IEnumerable<Employees> GetAll()
        {
            using (IDbConnection conn = _dbContext.GetConnection())
            {
                return conn.Query<Employees>("select id, firstname,lastname,salary,deptid from employees");
            }
        }

        public Employees GetById(int id)
        {
            using (IDbConnection conn = _dbContext.GetConnection())
            {
                return conn.QuerySingleOrDefault<Employees>("select id, firstname,lastname,salary,deptid from employees where id = @id", new { id = id });
            }
        }

        public int Insert(Employees obj)
        {
            using (IDbConnection conn = _dbContext.GetConnection())
            {

                var deptIdExists = conn.QuerySingleOrDefault<int>("select count(*) from departments where id = @id", new { Id = obj.DeptId });
                if(deptIdExists == 1)
                {
                    return conn.Execute("insert into employees values(@firstname,@lastname,@salary,@deptid)", obj);
                }
                else
                {
                    Console.Write("the department id you enter doesn't exist in department \n it will be assign to temp department 8");
                    obj.DeptId = 8;
                    return conn.Execute("INSERT INTO Employees (firstname, lastname, salary, deptid) VALUES (@firstname, @lastname, @salary, @deptid)", obj);
                }

            }
        }

        public int Update(Employees obj)
        {
            using (IDbConnection conn = _dbContext.GetConnection())
            {
                Console.Write("if you want to update department enter 1\n");
                var input = Convert.ToInt32(Console.ReadLine());
                if(input == 1)
                {
                    Console.Write("enter the new department id:\n");
                    obj.DeptId = Convert.ToInt32(Console.ReadLine());
                    var deptIdExists = conn.QuerySingleOrDefault<int>("select count(*) from departments where id = @id", new { Id = obj.DeptId });
                    if(deptIdExists == 1)
                    {
                        return conn.Execute("update employees set firstname = @firstname,lastname = @lastname,salary = @salary,deptid = @deptid where id = @Id", obj);
                    }
                    else
                    {
                        Console.Write("the department id you enter not exist, no change to department id");
                        return conn.Execute("update employees set firstname = @firstname,lastname = @lastname,salary = @salary where id = @Id", obj);
                    }
                }
                else
                {
                    return conn.Execute("update employees set firstname = @firstname,lastname = @lastname,salary = @salary where id = @Id", obj);
                }
                
                
            }
        }
    }
}
