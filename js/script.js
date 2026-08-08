const menuToggle=document.getElementById("menuToggle"),navMenu=document.getElementById("navMenu"),progressBar=document.getElementById("progressBar"),toTop=document.getElementById("toTop"),year=document.getElementById("year");
menuToggle?.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progressBar.style.width=(window.scrollY/max*100)+"%";
  toTop.style.display=window.scrollY>500?"grid":"none";
});
toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
