import"./hoisted.C4-qDx61.js";let n=document.querySelector(".slider"),r=document.querySelector(".indicator-buttons"),o=["https://arquimedes15.github.io/297-Jardin-Piloto/img/slider/slider%20pagina%20web.jpg","https://arquimedes15.github.io/297-Jardin-Piloto/img/slider/slider%20pagina%20web.jpg"];function a(){for(let e=0;e<o.length;e++)n.innerHTML+=`<img alt="nose" id="cal-slider-ka" src="${o[e]}">`,e==0?r.innerHTML+='<button class="indicator active"></button>':r.innerHTML+='<button class="indicator"></button>'}a();let i=n.querySelectorAll("img"),t=0;n.style.width=`${i.length}00%`;let d=document.querySelector(".next"),c=document.querySelector(".prev"),s=100/i.length;d.addEventListener("click",()=>{if(t++,t==i.length||t>i.length){t=0,n.style.transform="translateX(-0%)",l();return}n.style.transform=`translateX(-${s*t}%)`,l()});c.addEventListener("click",()=>{if(t--,t==-1||t<-1){t=i.length-1,n.style.transform=`translateX(-${s*(i.length-1)}%)`,l();return}n.style.transform=`translateX(+${s*t}%)`,l()});function l(){r.innerHTML="";for(let e=0;e<o.length;e++)e==t?r.innerHTML+='<button class="indicator active"></button>':r.innerHTML+='<button class="indicator"></button>'}