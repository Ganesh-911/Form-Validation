const formData=document.querySelector('.form');
let submitBtn=document.querySelector('.button');
let errorMessages=document.querySelectorAll(".error-message");
let emptyFieldMsgs=document.querySelectorAll(".empty-field");
let showPasswordBtn=document.querySelector(".btn");
const visibleBtn=document.querySelector('.eyeIcon');
let firstName,lastName,email,password;
let fnTarget,lnTarget,emailTarget,passwordTarget;
let field;
const darkModeBtn = document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    darkModeBtn.textContent = isDark ? "☀️" : "🌙";
});


const nameRegex=/^[a-z]+$/i;
const emailRegex=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


for(let errorMsg of errorMessages){
    errorMsg.classList.add("d-none");
    
}
for(let emptyMsg of emptyFieldMsgs){
    emptyMsg.classList.add("d-none");
}

formData.addEventListener("keyup",(event)=>{
    event.preventDefault();
    field=event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName=event.target.value;
            fnTarget=event.target;
            break;
        case "lastName":
            lastName=event.target.value;
            lnTarget=event.target;
            break;
        case "email":
            email=event.target.value;
            emailTarget=event.target;
            break;
        case "password":
            password=event.target.value;
            passwordTarget=event.target;
            break;
        default:
            firstName=lastName=email=password="";
            break;
    }

});

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(firstName){
        emptyFieldMsgs[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
        }
    }
    else{
        emptyFieldMsgs[0].classList.remove("d-none");
    }
    if(lastName){
        emptyFieldMsgs[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
        }
        else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
        }
    }
    else{
        emptyFieldMsgs[1].classList.remove("d-none");
    }
    if(email){
        emptyFieldMsgs[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
        }
        else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
        }

    }
    else{
        emptyFieldMsgs[2].classList.remove("d-none");
    }
    if(password){
        emptyFieldMsgs[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            passwordTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
        }
        
        else{
            passwordTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");
        }
    }
    else{
        emptyFieldMsgs[3].classList.remove("d-none");
    }
});


showPasswordBtn.addEventListener("click",(event)=>{
    event.preventDefault();
   const isVisible=passwordTarget.getAttribute("type")==="text";
   passwordTarget.setAttribute("type",isVisible?"password":"text");
   eyeIcon.textContent=isVisible?"visibility":"visibility_off";
});
