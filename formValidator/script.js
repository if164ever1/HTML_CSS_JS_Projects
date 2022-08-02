const form      =   document.getElementById('form');
const username  =   document.getElementById('username');
const password  =   document.getElementById('password');
const password2 =   document.getElementById('password2');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkRequiredField(inputTextArray){
    inputTextArray.forEach(element => {
        if(element.value.trim() === ''){
            showError(element, `${getFieldName(element)} is required`);
        } else {
            showSuccess(element);
        }
    });
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // if(username.value === ''){
    //     showError(username, 'Username is requred');
    // }else {
    //     showSuccess(username);
    // }

    
    // if(email.value === ''){
    //     showError(email, 'Email is requred');
    // }else if(!validateEmail(email.value)){
    //     showError(email, 'Email is not valid');
    // }
    // else {
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, 'Password is requred');
    // }else {
    //     showSuccess(password);
    // }

    // if(password2.value === ''){
    //     showError(password2, 'Password is requred');
    // }else {
    //     showSuccess(password2);
    // }

    checkRequiredField([username, email, password, password2]);
})


