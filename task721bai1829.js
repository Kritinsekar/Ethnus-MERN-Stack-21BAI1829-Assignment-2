const start = document.querySelector('.start');
const stops = document.querySelector('.stops');
const img=document.querySelector('.image');

start.addEventListener('click',()=>{
    img.classList.add('anistart');
})

stops.addEventListener('click',()=>{
    img.classList.remove('anistart');
})




