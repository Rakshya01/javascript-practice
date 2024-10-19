const displayMsg=(msg,id,color)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=color
}
const fnameValidate=()=>{
    const first_name=document.getElementById('fname').value
    if(first_name==''){
        displayMsg('firstname is required', 'fnameMsg', 'red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters', 'fnameMsg','red')
        return false

    }
    else if(!first_name.match(/^([A-Z]{1})+([a-z])+$/)){
        displayMsg('firstname must contain alphabets with first letter capital', 'fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}
const lnameValidate=()=>{
    const last_name=document.getElementById('lname').value
    if(last_name==''){
        displayMsg('lastname is required', 'lnameMsg', 'red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters', 'lnameMsg','red')
        return false

    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}
const emailValidate=()=>{
    const email=document.getElementById('email').value
    if(email==''){
        displayMsg('email is required', 'email', 'red')
        return false
    }
    else if(email.length<3){
        displayMsg('email must be more than 2 characters', 'email','red')
        return false

    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\.\-\_]+\@+([a-z])+\.+([a-z])+$/)){
        displayMsg ('invalid email format','emailMsg','red')
        return false
    }
    else{
        displayMsg('valid email','email','green')
        return true
    }
}
const pwdValidate=()=>{
    const pwd=document.getElementById('pwd').value
    if(pwd==''){
        displayMsg('password is required', 'pwdMsg', 'red')
        return false
    }
    else if(pwd.length<3){
        displayMsg('password must be more than 2 characters', 'pwdMsg','red')
        return false

    }
else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\@\#\$\?\.]).{8,}/)){
    displayMsg('password must be of minimum 8 characters and looklike this: Asdf23@', 'pwdMsg','red')
    return false
}
    
    else{
        displayMsg('valid password','pwdMsg','green')
        return true
    }
}