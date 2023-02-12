const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const error = document.querySelector("#errorMessage");


confirmPassword.addEventListener("input", passwordMatch);
password.addEventListener("input", passwordMatch);


function passwordMatch(){
    if(password.value === "" || confirmPassword === ""){
        error.textContent = "";
    }else{
        if(confirmPassword.value != password.value){
            error.textContent = "Password doesn't match"
            

        }else{
            if(confirmPassword.value === password.value){
                error.textContent = "";

            }
        }
    }
}