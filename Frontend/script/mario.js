document.addEventListener("DOMContentLoaded", () => {

    const btnMissao = document.getElementById("btnMissao");
    const btnCuriosidades = document.getElementById("btnCuriosidades");
    const modalMissao = document.getElementById("modalMissao");
    const modalCuriosidades = document.getElementById("modalCuriosidades");

    btnMissao.addEventListener("click", () => {
        modalMissao.style.display = "flex";
    });

    btnCuriosidades.addEventListener("click", () => {
        modalCuriosidades.style.display = "flex";
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