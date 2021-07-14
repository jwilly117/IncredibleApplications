document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", function(){
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    })

    document.querySelector("#linkLogin").addEventListener("click", function(){
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    })
})
