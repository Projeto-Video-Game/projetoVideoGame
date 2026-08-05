const modal = document.getElementById("pokemonModal")
const fecharModalBtn = document.querySelector(".fecharModal")
const modalInfo = document.getElementById("modalInfo")

function abrirModal(pokemon) {
    modal.style.display = "flex"
}

fecharModalBtn.addEventListener("click", () => modal.style.display = "none")
modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none" })