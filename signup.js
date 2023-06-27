var email = document.getElementById("field1")
var err1 = document.getElementById("err1")
var pwd = document.getElementById("field2")
var err2 = document.getElementById("err2")
var pnr = document.getElementById("field3")
var err3 = document.getElementById("err3")
var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/

function validateEmail(){
    if(email.value.trim()==''){
        err1.innerText="field cannot be empty";
        email.style.border='1px solid red'
        return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="e-mail is not correct form";
        email.style.border='2px solid red'
        return false
   }
   else{
    err1.innerText="";
    email.style.border="2px solid green";

    return true
   }
}
function validatePassword(){
    if(pwd.value.trim()=="")
    {
        err2.innerText="field cannot be empty";
        pwd.style.border='2px solid red'
        return false
    }
    else if(pwd.value.length<3)
    {
        err2.innerText="password should be more than 3 characters";
        pwd.style.border="2px solid red"
        return false
    }
    else 
    {
        err2.innerText=""
        pwd.style.border='2px solid green'
        return true
    }
}
function validatePhonenumber(){
    if(pnr.value.trim()=="")
    {
        err3.innerText="field cannot be empty";
        pnr.style.border='2px solid red'
        return false
    }
    else if(pnr.value.length<10)
    {
        err3.innerText="phone number should be 10 digits";
        pnr.style.border="2px solid red"
        return false
    }
    else 
    {
        err3.innerText=""
        pnr.style.border='2px solid green'
        return true
    }
}
function verify(){
    if(!validateEmail()||!validatepassword()){
        return false
    }else{
        return true
    }
}