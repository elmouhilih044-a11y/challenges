import { employees } from "./data.js"

const company = {
    employees: employees, // le tableau existant
    projects: {
        "Project Alpha": [],
        "Project Beta": [],
        "Project Gamma": [],
        "Project Delta": [],
        "Project Epsilon": []
    },
}

// function 1
function assignEmployeeToProject(employeeId, projectName) {
    const x = employees.find(employee => employee.id === employeeId)
    if (!x) {
        console.log("id n'est pas trouvé")
        return;
    }
    company.projects[projectName].push(x)
}
assignEmployeeToProject(1, "Project Alpha");
console.log(company.projects["Project Alpha"]);

// function 2
function getProjectTeam(projectName) {
    // Retourner tous les employés d'un projet
    const result = company.projects[projectName];
    if (!result) {
        alert("il n'a aucun employee")
        return [];
    }
    return result;
}
console.log(getProjectTeam("Project Alpha"))
console.log(getProjectTeam("Project Epsilon"))

// function 3
// Retourner tous les projets d'un employé

function getEmployeeProjects(employeeId) {
    const employee = company.employees.find(emp => emp.id === employeeId);
    if (!employee) {
        alert("id non trouvé");
        return [];
    }
    return employee.projects;
}
console.log(getEmployeeProjects(1));


// function 4
function getEmployeesWithMultipleProjects() {
    const result = company.employees.filter(emp => emp.projects.length >= 2);
    return result; 
}
console.log(getEmployeesWithMultipleProjects());
