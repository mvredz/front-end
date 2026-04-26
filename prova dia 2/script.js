function add() {
    const cardsContainer = document.getElementById("Cards");

    const novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá" 
             style="height: 300px; object-fit: cover;">

        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Tolentino Coelho de Lima</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>

            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80</span><br>
                <span><strong>Posição:</strong> Meio-campista</span>
            </p>
        </div>
    `;

    cardsContainer.appendChild(novoCard);
}