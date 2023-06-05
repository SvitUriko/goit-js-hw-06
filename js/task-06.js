const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", () =>{
    
    const length = Number(inputEl.getAttribute('data-length'));

    if(inputEl.value.length === length){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else{
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }

})