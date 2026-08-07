document.addEventListener("DOMContentLoaded", () => {

    const btnLendas = document.getElementById("btnLendas");
    const btnModo = document.getElementById("btnModo");
    const modalLendas = document.getElementById("modalLendas");
    const modalModo = document.getElementById("modalModo");

    btnLendas.addEventListener("click", () => {
        modalLendas.style.display = "flex";
    });

    btnModo.addEventListener("click", () => {
        modalModo.style.display = "flex";
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