let multiplyButton=document.querySelector('.multiply');
let divideButton=document.querySelector('.Divide');
let result=document.querySelector('.resultvalue');

multiplyButton.addEventListener('click',()=>{
    let value1=document.querySelector('.numberinput1').value;
    let value2=document.querySelector('.numberinput2').value;
    if(value1!=='' && value2!==''){
        let output=value1*value2;
        result.textContent=output;
    }
})

divideButton.addEventListener('click',()=>{
    let value1=document.querySelector('.numberinput1').value;
    let value2=document.querySelector('.numberinput2').value;
    if(value1!=='' && value2!==''){
        let output=value1/value2;
        result.textContent=output;
    }
})