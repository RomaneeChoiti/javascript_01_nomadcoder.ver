const loginIqut = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form Button");

function btnClick(){
    console.log("Hello~", loginIqut.value);
}

loginButton.addEventListener("click", btnClick);