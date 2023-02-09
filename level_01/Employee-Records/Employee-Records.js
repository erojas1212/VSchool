const employeeArr = [];

// Make a constructor func ("status" will be defaulted to "Full Time")

function Employee(name, jobTitle, salary, status = "Full Time"){ // this is a Constructor func because the firts letter is capilized
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = () => {
        console.log("Name: " + name + ", Job Title: " + jobTitle + ", Salary: " + salary + ", Status: " + status);
    }
}

// INstantiat the employees
const employee1 = new Employee("John Wick", "Hitman", "$1000000", "contract");
const employee2 = new Employee("Denji", "Devil Hunter", "$500");
const empployee3 = new Employee("Elon Musk", "Tesla CEO", "$900");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
empployee3.printEmployeeForm();

employeeArr.push(employee1, employee2, empployee3);
console.log(employeeArr)
