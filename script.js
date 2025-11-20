import { employees } from "./dataset.js";
// Ex1:
function getFirstEmployeeFirstName(employees) {
    return employees[0].firstName;
}
console.log(getFirstEmployeeFirstName(employees))


// Ex2:

function getLastEmployeeLastName(employees) {
    return employees[employees.length-1].firstName;
}
console.log(getLastEmployeeLastName(employees))

// Ex3:

function getEmployeeDepartmentById(employees,ID){
    for(let i=0;i<employees.length-1;i++){
        if(ID===employees[i].id)
            return employees[i].department
    }
}
console.log(getEmployeeDepartmentById(employees,5))

// Ex5:
function hasInactiveEmployees(employees){
      for(let i=0;i<employees.length-1;i++){
        if(employees[i].isActive===false)
            return true;
    }
}
console.log(hasInactiveEmployees(employees))


// Ex8

function countEmployeesInDepartment(employees,department){
    let count=0;
    for(let i=0;i<employees.length-1;i++){
        if(employees[i].department===department){
            count++;
        }
    }
      return count
}
console.log(countEmployeesInDepartment(employees,"Développement"))


// Ex9

function getUniqueDepartments(employees) {
  const departments = [];

  for (let i = 0; i < employees.length-1; i++) {
    let department = employees[i].department;
    let x= false;

    for (let z = 0; z < departments.length; z++) {
      if (departments[z] === department) {
        x= true;
        break;
      }
    }
}
}
console.log(getUniqueDepartments(employees));