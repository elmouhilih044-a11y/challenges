import { employees } from "./data.js"
const table =document.getElementById("employees-table");
const container=document.getElementById("employees-container");
const list=document.getElementById("employees-tbody");


// button
const btn=document.createElement("button");
btn.textContent="afficher"

container.appendChild(btn)
container.insertBefore(btn,container.firstChild)
 btn.addEventListener('click', () => {
    if (table.style.display === "none") {
        table.style.display = "table"; 
        btn.textContent="masquer"
    } else {
        table.style.display = "none"; 
        btn.textContent="afficher"
    }
});


function afficherEmployes(employees){
    for(let employee of employees ){
    const row=document.createElement("tr")
    row.innerHTML=`
    <td>${employee.firstName}</td>
<td>${employee.lastName}</td>
<td>${employee.department}</td>
<td>${employee.position}</td>
<td>${employee.salary}</td>
<td>${employee.skills}</td>
`
list.appendChild(row)
}
} 

console.log(afficherEmployes(employees))


