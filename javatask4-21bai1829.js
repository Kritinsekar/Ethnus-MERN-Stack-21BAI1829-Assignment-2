let showDate=document.querySelector('.showdate');
let showTime=document.querySelector('.showtime');
let para1=document.querySelector('.date');
let para2=document.querySelector('.dateandtime');


let a=new Date();
console.log(a);

showTime.addEventListener('click',()=>{
    para2.textContent=a;
})


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2,'0')
const day = currentDate.getDate().toString()

console.log(`${day}/${month}/${year}`)

showDate.addEventListener('click',()=>{
    para1.textContent=`${day}/${month}/${year}`;
})