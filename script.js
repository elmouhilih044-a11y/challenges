import { employees } from "./data.js"

// function 1
function getEmployeesByDepartment(department) {
   const Result=employees.filter(employee=>employee.department===department)
    console.log(Result)
}
getEmployeesByDepartment("Marketing") 

// function 2
function augmenterSalaires(pourcentage) {
   const Result=employees.map(employee=>employee.salary+(pourcentage*employee.salary)/100)
   console.log(Result)
    // Augmente tous les salaires du pourcentage donné
    // Retourne le nouveau tableau
}
augmenterSalaires(20)

// function 3
function getDepartmentStats() {
    let count=0;
    let som=0;
    for(let employee of employees){
        count++
    }
    for(let employee of employees){
       som=som+employee.salary;
    }
    const salaryMoyen=som/count
 let max=employees[0].salary
  for(let employee of employees){
  if(employee.salary>max){
    max=employee.salary
  }

    }
    // Retourne un objet avec pour chaque département :
    // - nombre d'employés
    // - salaire moyen
    // - salaire maximum
    console.log(count)
    console.log(salaryMoyen)
    console.log(max)
}

getDepartmentStats() 

// function 4
function getEmployeesWithSkill(skill){
   return employees.filter(employee=>employee.skills.includes(skill))
}
console.log(getEmployeesWithSkill("JavaScript"))
