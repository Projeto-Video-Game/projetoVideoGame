document.addEventListener("DOMContentLoaded", () => {

    const btnEstilo = document.getElementById("btnEstilo");
    const btnJogos = document.getElementById("btnJogos");
    const modalEstilo = document.getElementById("modalEstilo");
    const modalJogos = document.getElementById("modalJogos");

    btnEstilo.addEventListener("click", () => {
        modalEstilo.style.display = "flex";
    });

    btnJogos.addEventListener("click", () => {
        modalJogos.style.display = "flex";
    });

    document.querySelectorAll(".fechar").forEach(fechar => {
        fechar.addEventListener("click", () => {
            fechar.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });

});