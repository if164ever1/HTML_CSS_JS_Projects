const form      =   document.getElementById('form');
const username  =   document.getElementById('username');
const password  =   document.getElementById('password');
const password2 =   document.getElementById('password2');


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

function checkLengthField(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} is must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} is must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

function checkValidEmail(input){
    const regEx = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(regEx.test(input.value)){
        showSuccess(input);
      }else{
        showError(input, 'Email is not valid');
      }
}

function checkPasswordMatch(password1, pasword2){
    if(password1.value !== pasword2.value){
        showError(pasword2, 'Password is not to mutch')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequiredField([username, email, password, password2]);
    checkLengthField(username, 3, 24);
    checkLengthField(password, 3, 24);
    checkValidEmail(email);
    checkPasswordMatch(password, password2);
})


