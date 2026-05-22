
function enviar(e){
  e.preventDefault();
  alert("✔ Mensaje enviado correctamente");
}

const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  btn.style.display = window.scrollY > 300 ? "block" : "none";

  document.querySelectorAll(".fade-in").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100){
      el.classList.add("show");
    }
  });

});

btn.onclick = () => {
  window.scrollTo({top:0, behavior:"smooth"});
};