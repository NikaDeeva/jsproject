const e=[{id:1,name:"Високосний калькулятор",category:"numerical"},{id:2,name:"Вгадай число",category:"numerical"},{id:3,name:"Камінь-Ножиці-Папір",category:"game"},{id:4,name:"Калькулятор",category:"numerical"},{id:5,name:"Калькулятор часу",category:"numerical"},{id:6,name:"Google динозаврик",category:"game"},{id:7,name:"Футбол",category:"game"},{id:8,name:"Найбільше число",category:"numerical"},{id:9,name:"Наша команда",category:"acquaintance"},{id:10,name:"Вчений",category:"acquaintance"}],a=document.getElementById("num"),c=document.getElementById("game"),n=document.getElementById("acqua"),t=document.querySelectorAll("section");console.log(t),a.addEventListener("click",()=>{e.forEach((e,a)=>{let c=t[a];"numerical"===e.category?c.style.display="block":c.style.display="none"})}),c.addEventListener("click",()=>{e.forEach((e,a)=>{let c=t[a];"game"===e.category?c.style.display="block":c.style.display="none"})}),n.addEventListener("click",()=>{e.forEach((e,a)=>{let c=t[a];"acquaintance"===e.category?c.style.display="block":c.style.display="none"})});
//# sourceMappingURL=index.6bc41150.js.map
