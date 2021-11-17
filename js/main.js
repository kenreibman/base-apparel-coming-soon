const form = document.querySelector('.form');
const email = document.querySelector('.form__input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = email.value;
    if(validateEmail(emailValue)){
        form.classList.remove('error');
        window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    }else {
        form.classList.add('error');
    }
});


//Stackoverflow
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}