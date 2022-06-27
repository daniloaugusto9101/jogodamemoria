const formInput = document.querySelector(".form__input");
const formBtn = document.querySelector(".form__btn");


const handleInput = (event) =>{

    if (event.target.value.length > 2) {
        formBtn.removeAttribute("disabled");
        return;
    }
    formBtn.setAttribute("disabled", "");
}

formInput.addEventListener("input", handleInput)