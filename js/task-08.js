const formEl = document.querySelector('.login-form');
const formSubmitBtnEl = document.querySelector('button');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {email, password} = event.currentTarget.elements;

    if(email.value === "" || password.value === ""){
        alert('All fields must be filled');
    } else {
        const data ={
            email: email.value,
            password: password.value,
        };
        console.log(data);

        formEl.reset();
    }  
})
