let name=document.querySelector('.name');
let email=document.querySelector('.email');
let website=document.querySelector('.website');
let message=document.querySelector('.message');

let nameError=document.querySelector('.nameerror');
let emailError=document.querySelector('.emailerror');
let websiteError=document.querySelector('.websiteerror');
let messageError=document.querySelector('.messageerror');

name.addEventListener('input',()=>{
    if(name.value===''){
        nameError.style.opacity='1';
    }else{
        nameError.style.opacity='0';
    }
})

email.addEventListener('input',()=>{
    if(!email.value.includes('@')){
        emailError.style.opacity='1';
    }else{
        emailError.style.opacity='0';
    }
})


website.addEventListener('input',()=>{
     if(!website.value.includes('.')){
        websiteError.style.opacity='1';
     }else{
        websiteError.style.opacity='0';
     }
})

message.addEventListener('input',()=>{
    if(message.value===''){
        messageError.style.opacity='1';
     }else{
        messageError.style.opacity='0';
     }
})