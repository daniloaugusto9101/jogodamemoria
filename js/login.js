const formInput = document.querySelector(".form__input");
const formBtn = document.querySelector(".form__btn");
const form = document.querySelector(".form-login");


const validateInput = ({target}) =>{

    if (target.value.length > 2) {
        formBtn.removeAttribute("disabled");
        return;
    }
    formBtn.setAttribute("disabled", "");
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInput.value);

    localStorage.setItem("player", formInput.value)
    window.location = "pages/game.html";
}


formInput.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
