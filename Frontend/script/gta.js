document.addEventListener("DOMContentLoaded", () => {

    const btnRecorde = document.getElementById("btnRecorde");
    const btnCriador = document.getElementById("btnCriador");
    const modalRecorde = document.getElementById("modalRecorde");
    const modalCriador = document.getElementById("modalCriador");

    btnRecorde.addEventListener("click", () => {
        modalRecorde.style.display = "flex";
    });

    btnCriador.addEventListener("click", () => {
        modalCriador.style.display = "flex";
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