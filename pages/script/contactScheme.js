var fields = {};


document.addEventListener("DOMContentLoaded", function() {
    fields.Fname = document.getElementById('Name');
    fields.email = document.getElementById('Email');
    fields.message = document.getElementById('Message');
   })

function isNotEmpty(value){
    if (value == null || typeof value == 'undefined') return false;

    return(value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.Fname, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
   
    return valid;
   }


function sendMessage(){
    if (isValid()){
        alert("Thank you for your message")
    }
    else{
        alert("There was an error, check if your input is correct")
    }
}






/* const sendMessageBtn = document.getElementById("fcf-button")


const sendMessage = ()=> {
    sendMessageBtn.onclick = () => {

        alert("Thank you for your message!");

    }
}
 */
