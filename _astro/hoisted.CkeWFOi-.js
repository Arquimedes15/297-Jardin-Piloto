import"./hoisted.C4-qDx61.js";let n=document.querySelector(".slider"),i=document.querySelector(".indicator-buttons"),o=["https://raw.githubusercontent.com/Arquimedes15/297-Jardin-Piloto/main/img/slider/slider%20pagina%20web.jpg","https://raw.githubusercontent.com/Arquimedes15/297-Jardin-Piloto/main/img/slider/slider%20pagina%20web.jpg"];function a(){for(let e=0;e<o.length;e++)n.innerHTML+=`<img alt="nose" id="cal-slider-ka" src="${o[e]}">`,e==0?i.innerHTML+='<button class="indicator active"></button>':i.innerHTML+='<button class="indicator"></button>'}a();let r=n.querySelectorAll("img"),t=0;n.style.width=`${r.length}00%`;let c=document.querySelector(".next"),d=document.querySelector(".prev"),s=100/r.length;c.addEventListener("click",()=>{if(t++,t==r.length||t>r.length){t=0,n.style.transform="translateX(-0%)",l();return}n.style.transform=`translateX(-${s*t}%)`,l()});d.addEventListener("click",()=>{if(t--,t==-1||t<-1){t=r.length-1,n.style.transform=`translateX(-${s*(r.length-1)}%)`,l();return}n.style.transform=`translateX(+${s*t}%)`,l()});function l(){i.innerHTML="";for(let e=0;e<o.length;e++)e==t?i.innerHTML+='<button class="indicator active"></button>':i.innerHTML+='<button class="indicator"></button>'}
