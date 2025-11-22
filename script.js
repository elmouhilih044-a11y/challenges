
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const email=document.querySelector(".email").value.trim()
    
    function validerEmail() {
        
        const regex=/^[\w.-\s]+@[\w.-]+\.\w{2,}$/
        if(email===""){
            alert("le champ email est vide")
        }
        else if(!regex.test(email)){
            alert("entrez format correct d'email")
        }
        else{
            alert("email valide")
        }
    }
    const name=document.querySelector(".name").value.trim()
    function validerNom() {
        const regex=/^[A-Za-z\s]+$/
        if(name===""){
            alert("le champ name est vide")
        }
        else if(!regex.test(name)){
            alert("entrez format correct de nom")
        }
        else{
            alert("nom valide")
        }
    }
    const tele=document.querySelector(".telephone").value.trim()
    function validerTelephone() {
     const regex=/^\+33\d{9}$/
        if(tele===""){
            alert("le champ telephone est vide")
        }
        else if(!regex.test(tele)){
            alert("entrez format correct de num telephone")
        }
        else{
            alert("num telephone valide")
        }
}


    validerEmail()
    validerNom()
    validerTelephone()
})

