var email = document.getElementById("email_address");
var mailerror = document.getElementById("mailError");
var phoneNumber = document.getElementById("phone_number");
var numberError = document.getElementById("numError");
var pass = document.getElementById("password");
var passError = document.getElementById("passError")
var repass = document.getElementById("re-password");
var reError = document.getElementById("reError");
var emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/ ;
var numberRegex = /^([0-9]{3})([- \.]?)([0-9]{3})([- \.]?)([0-9]{4})$/ ;
var passRegex = /((?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+))/ ;
var passStrLabel = document.getElementById("passStrLabel");

function validMail(){

    if (emailRegex.test(email.value))
    {
        mailerror.innerHTML="Valid Format";
        email.style.border = "";
        return true;
    }
    else
    {
        mailerror.innerHTML="Invalid Format! Please re-enter email address";
        email.style.border = "red 1px solid";
        return false;
    }
}

function validNumber()
{
        if (numberRegex.test(phoneNumber.value))
        {
            numberError.innerText = "Valid Number";
            phoneNumber.style.border = "";
            return true;
        }
        else
        {
            numberError.innerText = "Invalid Format! Please re-enter phone number";
            phoneNumber.style.border = "red 1px solid"
            return false;
        }
}

function validPass()
{
    if (passRegex.test(pass.value) && Pass.value.length>=8)
    {
        passError.innerHTML = "Valid Format";
        inputPass.style.border = "";
        return true;
    }
    else
    {
        passError.innerHTML = "Password must contain at least one uppercase, lowercase character and number";
        inputPass.style.border = "red 1px solid";
        return false;
    }
}

function validConfPass()
{
    if (repass.value == pass.value)
    {
        reError.innerHTML = "Passwords match";
        repass.style.border = "";
        return true;
    }
    else
    {
        reError.innerHTML = "Passwords don't match";
        repass.style.border = "red 1px solid";
        return false;
    }
}

function passStrength()
{
    if (Pass.value.length<=9)
    {
        Pass.style.border = "red 1px solid";
        passStrLabel.style.color = "red";
        passStrLabel.innerHTML = "Weak Password!";
    }
    else if (Pass.value.length>9 && Pass.value.length<=12)
    {
        Pass.style.border = "yellow 1px solid";
        passStrLabel.style.color = "yellow";
        passStrLabel.innerHTML = "Medium Password";
    }
    else if (Pass.value.length>12)
    {
        Pass.style.border = "green 1px solid";
        passStrLabel.style.color = "green";
        passStrLabel.innerHTML = "Strong Password!";
    }
    else if(Pass.value.length == 0)
    {
        Pass.style.border = "";
        passStrLabel.innerHTML = "";
    }
}







function Validate()
{
    var a = validMail();
    var b = validNumber();
    var c = validPass();
    var d = validConfPass();
    if (a && b && c && d)
    return true
    else
    return false
}
