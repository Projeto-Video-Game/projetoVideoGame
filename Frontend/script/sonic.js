document.addEventListener("DOMContentLoaded", () => {

    const btnAliados = document.getElementById("btnAliados");
    const btnDesenhos = document.getElementById("btnDesenhos");
    const modalAliados = document.getElementById("modalAliados");
    const modalDesenhos = document.getElementById("modalDesenhos");

    btnAliados.addEventListener("click", () => {
        modalAliados.style.display = "flex";
    });

    btnDesenhos.addEventListener("click", () => {
        modalDesenhos.style.display = "flex";
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