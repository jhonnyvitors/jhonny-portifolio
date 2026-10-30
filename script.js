const botaoMenu = document.querySelector(".menu-alternar");
const navegacao = document.querySelector("#navegacao");

if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", () => {
        const menuAberto = botaoMenu.getAttribute("aria-expanded") === "true";
        botaoMenu.setAttribute("aria-expanded", String(!menuAberto));
        botaoMenu.querySelector(".menu-texto").textContent = menuAberto ? "Abrir menu" : "Fechar menu";
        navegacao.classList.toggle("aberto", !menuAberto);
    });

    navegacao.addEventListener("click", (evento) => {
        if (evento.target.closest("a")) {
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.querySelector(".menu-texto").textContent = "Abrir menu";
            navegacao.classList.remove("aberto");
        }
    });
}
