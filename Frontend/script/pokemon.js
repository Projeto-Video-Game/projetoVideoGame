document.addEventListener("DOMContentLoaded", () => {

    const btnCriador = document.getElementById("btnCriador");
    const btnCriaturas = document.getElementById("btnCriaturas");
    const modalCriador = document.getElementById("modalCriador");
    const modalCriaturas = document.getElementById("modalCriaturas");

    btnCriador.addEventListener("click", () => {
        modalCriador.style.display = "flex";
    });

    btnCriaturas.addEventListener("click", () => {
        modalCriaturas.style.display = "flex";
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