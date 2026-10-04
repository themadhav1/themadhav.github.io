const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.section,.cards article,.social-grid a').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(28px)';el.style.transition='opacity .8s ease,transform .8s ease';observer.observe(el)});
document.addEventListener('DOMContentLoaded',()=>document.getElementById('year').textContent=new Date().getFullYear());
const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:none!important}';document.head.appendChild(style);
