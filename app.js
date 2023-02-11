const password = document.querySelector("#password").value;
const confirmPassword = document.querySelector("#confirmPassword").value;

const error = document.querySelector("#errorMessage");


confirmPassword.addEventListener("input" , passwordCheck);
password.addEventListener("input", passwordCheck);



function passwordCheck(){
    if (password.value === "" || confirmPassword.value ===""){
        error.textContent = "";
    }else if (confirmPassword.value != password.value){
            error.textContent = "passwords don't match";
    }else if (confirmPassword.value === password.value) {
        error.textContent = "OK"
        error.style.color = "green";
        
    }
}