document.addEventListener("submit", function () {
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    const error = document.querySelector("#error");

    if (password === confirmPassword){
        error.innerHTML = "";
    }
    else {
        error.innerHTML = "*passwords does not match"
    }
});
