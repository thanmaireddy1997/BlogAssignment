
function printError(element, msg){ 
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){

    var submit = document.getElementById("submit");
    submit.disabled = true;

    //Retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;
    

    var nameErr = emailErr = mobileErr =  messageErr = true;

    //validatename
    if(name == ""){
        printError("nameErr", "please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", " please enter a valid name")
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    //valiadte email
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your Phone Number");
    } else {
        // Regular expression for basic phone number validation
        var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid Phone Number");
        } else {
            printError("mobileErr", "");
            emailErr = false;
        }
    }

    //validatename
    if(message == " "){
        printError("messageErr", "please enter your message");
    }else{
        var regex = /^\S+$/;
        if(regex.test(message) === false) {
            printError("messageErr", " please enter a valid message")
        }else{
            printError("messageErr", "");
            nameErr = false;
        }
    }



    if(nameErr || emailErr || messageErr || mobileErr == true){
        return false;
    }
    
    alert("You have submitted the form...");
    submit.disabled = false;
    return true;
    

}