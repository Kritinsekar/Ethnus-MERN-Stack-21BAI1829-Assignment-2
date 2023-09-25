let c1 = document.querySelector('.c1');
let c2=document.querySelector('.c2');
let userName=document.querySelector('.username');
let password=document.querySelector('.password');

userName.addEventListener('input',()=>{
    c1.style.opacity='1';
})

password.addEventListener('input',()=>{
    c2.style.opacity='1';
})