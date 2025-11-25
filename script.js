import {employees} from"./data.js"

// function 1
function masseSalarialeFor() {
    let total = 0;
    // Utiliser for classique
    for(let i=0;i<employees.length-1;i++){
        total+=employees[i].salary;
    }
    return total;
}
console.log(masseSalarialeFor())

// function 2
function listerEmailsForOf() {
    const emails = [];
    for(let employee of employees){
        emails.push(employee.email)
    }
    // Utiliser for...of
    return emails;
}
console.log(listerEmailsForOf());

// function 3 
function compterParDepartementForEach() {
    const stats = {};

    employees.forEach(employee => {
        const dep = employee.department;

        if (stats[dep]) {
            stats[dep]++;
        } else {
            stats[dep] = 1;
        }
    });

    return stats;
}
console.log(compterParDepartementForEach())

// function 4

function employeesSimplifiesMap() {
    // Retourner [{id, nomComplet, department}]
    // Utiliser map
    let result =employees.map(employee=>{
        return{
         id:employee.id,
     nomComplet:employee.firstName+" "+employee.lastName,
 department:employee.department,
        }
    })

    return result;

}
console.log(employeesSimplifiesMap())

// function 5

function employesSeniors() {
    const result = employees
        .filter(employee => employee.age > 35) 
        .map(employee => employee.skills);     
    return result;
}

console.log(employesSeniors());

