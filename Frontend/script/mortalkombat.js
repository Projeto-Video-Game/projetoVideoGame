document.addEventListener("DOMContentLoaded", () => {

    const btnSinopse = document.getElementById("btnSinopse");
    const btnArena = document.getElementById("btnArena");
    const modalSinopse = document.getElementById("modalSinopse");
    const modalArena = document.getElementById("modalArena");

    btnSinopse.addEventListener("click", () => {

        modalArena.style.display = "none";
        modalSinopse.style.display = "block";
        modalSinopse.scrollIntoView({
            behavior:"smooth"
        });
    });

    btnArena.addEventListener("click", () => {

        modalSinopse.style.display = "none";

        modalArena.style.display = "block";

        modalArena.scrollIntoView({
            behavior:"smooth" });
    });

    document.querySelectorAll(".fechar").forEach(fechar => {

        fechar.addEventListener("click", () => {
            fechar.parentElement.style.display = "none";
        });
    });
});