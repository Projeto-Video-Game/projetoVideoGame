document.addEventListener("DOMContentLoaded", () => {

    const btnHistoria = document.getElementById("btnHistoria");
    const btnPersonagens = document.getElementById("btnPersonagens");

    const modalHistoria = document.getElementById("modalHistoria");
    const modalPersonagens = document.getElementById("modalPersonagens");

    btnHistoria.addEventListener("click", () => {
        modalHistoria.style.display = "flex";
    });

    btnPersonagens.addEventListener("click", () => {
        modalPersonagens.style.display = "flex";
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