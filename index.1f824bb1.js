!function(){function e(){document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.querySelector("[data-modal-open]").addEventListener("click",function(t){let o=document.querySelector(".footer__mail");""!==o.value&&o.value.includes("@")?e():(alert("Введіть вашу пошту"),o.style.borderColor="red",t.preventDefault())}),document.querySelector("[data-modal-close]").addEventListener("click",function(){e()})}();
//# sourceMappingURL=index.1f824bb1.js.map
