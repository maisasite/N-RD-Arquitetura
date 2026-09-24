// MENU MOBILE
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Fecha o menu ao clicar em um link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});


// FORMULÁRIO DE SOLICITAÇÃO DE PROJETO
function sendProject(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const projectType = document.getElementById("project-type").value;

  const message = document.getElementById("form-message");

  message.innerHTML =
    "✓ Obrigada, <strong>" + name + "</strong>! " +
    "Sua solicitação para <strong>" + projectType + "</strong> " +
    "foi registrada com sucesso. Entraremos em contato através do e-mail " +
    "<strong>" + email + "</strong>.<br>" +
    "Este formulário é demonstrativo.";

  event.target.reset();
}


// BOTÃO FLUTUANTE
function goToContact() {
  const contact = document.getElementById("contato");

  contact.scrollIntoView({
    behavior: "smooth"
  });
}


// EFEITO NO CABEÇALHO AO ROLAR A PÁGINA
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 80) {
    header.style.position = "fixed";
    header.style.background = "rgba(21, 21, 21, 0.96)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.position = "absolute";
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }
});


// ANIMAÇÃO SUAVE DOS ELEMENTOS AO APARECEREM NA TELA
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document
  .querySelectorAll(".project, .service, .process-steps article")
  .forEach(element => {
    observer.observe(element);
  });
