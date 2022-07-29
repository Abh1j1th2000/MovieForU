let Name=document.getElementById("name");
let Age=document.getElementById("age");
let Phone=document.getElementById("contact");
let Email=document.getElementById("mail");

let sub=document.getElementById("type");
let Error1=document.getElementById("error1");
let Error2=document.getElementById("error2");
let Error3=document.getElementById("error3");
let Error4=document.getElementById("error4");
let Error5=document.getElementById("error5");

function validate1(){
    let name=Name.value;
    let regex=new RegExp("^[A-Za-z]*$");
    Error1.innerHTML="";
    if(name==='' || name.lenght<3){
        Error1.innerHTML="<small>First name is required</small>";
        Name.style.border="2px solid red";
        return false;
    }
    else if(regex.test(name)==false){
        Error1.innerHTML="<small>First name must have only letters</small>";
        Name.style.border="2px solid red";
        return false;
    } 
    else{
        Name.style.border="2px solid green";
        return true;
    }
}


function validate2(){
    let age=Age.value;
    Error2.innerHTML="";
    if(age===''){
        Error2.innerHTML="<small>Age is required</small>";
        Age.style.border="2px solid red";
        return false;
    }
    else if(age<12 || age>60){
        Error2.innerHTML="<small>Age must be between 20 to 60</small>";
        Age.style.border="2px solid red";
        return false;
    }
    else{
        Age.style.border="2px solid green"; 
        return true;
    }
}
function validate3(){
    let phone=Phone.value;
    Error3.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    if(phone===''){
        Error3.innerHTML="<small>Mobile number is required</small>";
        Phone.style.border="2px solid red";
        return false;
    }
    else if(regex.test(phone)===false){
        Error3.innerHTML="<small>Number should be 10 digits number</small>";
        Phone.style.border="2px solid red";
        return false;
    }
    else{
        Phone.style.border="2px solid green";
        return  true;
    }

}

function validate4(){
    let email=Email.value;
    Error4.innerHTML="";
    if(email===''){
        Error4.innerHTML="<small>Email is required</small>";
        Email.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        Error4.innerHTML="<small>Please enter valid email</small>";
        Email.style.border="2px solid red";
        return false;
    }
    else{
        Email.style.border="2px solid green";
        return true;
    }
}