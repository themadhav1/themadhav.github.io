const header=document.querySelector('.topbar');
const menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>header.classList.toggle('open'));
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
