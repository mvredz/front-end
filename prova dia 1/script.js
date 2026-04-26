function revelar() {
    
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "img/_vinicius_junior.png";

    document.getElementById("Nome").firstElementChild.textContent =
        "Vinícius José Paixão de Oliveira Júnior";

    document.getElementById("Rank").textContent = "9,5";
    document.getElementById("Data_Nas").textContent =
        "Nascimento: 12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent =
        "Altura: 1,76 m";
    document.getElementById("Posição ").textContent =
        "Posição: Ponta-esquerda / Atacante";

    const placeholders = document.querySelectorAll(".placeholder");

    placeholders.forEach((el) => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

    document
        .querySelectorAll(".placeholder-glow")
        .forEach((el) => el.classList.remove("placeholder-glow"));
}