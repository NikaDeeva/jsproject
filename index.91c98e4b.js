!function(){var e=0,t=document.querySelectorAll(".slide"),c=document.querySelector("#prevBtn"),i=document.querySelector("#nextBtn"),n=document.querySelectorAll(".dot");function l(){c.disabled=0===e,i.disabled=e===t.length-1,n.forEach((function(t,c){t.classList.toggle("active",c===e)}))}c.addEventListener("click",(function(){t[e].classList.remove("active"),t[e+=-1].classList.add("active"),l()})),i.addEventListener("click",(function(){t[e].classList.remove("active"),t[e+=1].classList.add("active"),l()})),l()}();
//# sourceMappingURL=index.91c98e4b.js.map
