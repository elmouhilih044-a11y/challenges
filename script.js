import { employees } from "./data.js"
const container=document.getElementById("employee-form")
const form=document.getElementById("form-fields")
const btnSkills=document.getElementById("add-skill-btn")
const containerSkills=document.getElementById("skills-container")

btnSkills.addEventListener('click',()=>{
    const div=document.createElement("div")
    containerSkills.appendChild(div)
    const input=document.createElement("input")
    div.appendChild(input)
    const btnDelete=document.createElement("button")
    btnDelete.textContent="X"
    div.appendChild(btnDelete)

    btnDelete.addEventListener('click',()=>{
        div.remove()
    })
})

container.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fields=document.querySelectorAll('input[required],select[required]')
    for (let field of fields) {
        if (field.value.trim() === "") {
         
            field.style.border = "2px solid red";
            return;                    
        } else {
            field.style.border = "1px solid green";
        }
    }


})