document.addEventListener("DOMContentLoaded", () => {

    const btnBiomas = document.getElementById("btnBiomas");
    const btnMobs = document.getElementById("btnMobs");
    const modalBiomas = document.getElementById("modalBiomas");
    const modalMobs = document.getElementById("modalMobs");

    btnBiomas.addEventListener("click", () => {
        modalBiomas.style.display = "flex";
    });

    btnMobs.addEventListener("click", () => {
        modalMobs.style.display = "flex";
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