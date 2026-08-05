document.addEventListener("DOMContentLoaded", () => {

    const btnSinopse = document.getElementById("btnSinopse");
    const btnAdaptacao = document.getElementById("btnAdaptacao");

    const modalSinopse = document.getElementById("modalSinopse");
    const modalAdaptacao = document.getElementById("modalAdaptacao");

    btnSinopse.addEventListener("click", () => {
        modalSinopse.style.display = "flex";
    });

    btnAdaptacao.addEventListener("click", () => {
        modalAdaptacao.style.display = "flex";
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