const password = document.querySelector("#password");
const passwordcfrm = document.querySelector("#passwordcfrm");


function check(){
    if(password.value != passwordcfrm.value)
    {
        password.classList.add("error");
        passwordcfrm.classList.add("error");
    }
    else
    {
        password.classList.remove("error");
        passwordcfrm.classList.remove("error");

    }
}

password.addEventListener("input",check);
passwordcfrm.addEventListener("input",check);
