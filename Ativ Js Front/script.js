const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "img/b_n.png",
    puto: "img/b_p.png",
    morto: "img/b_d.png",
    comendo: "img/b_c.png",
    alimentado: "img/b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.puto;
            }

            if(contador == 60){
                cria.src = estados.morto;
            }
        }, 1000);
}

function alimentar (){

    cria.src = estados.comendo
    contador = 0;
    console.log("Comendo");

    if(time_click) clearInterval(time_click)

        time_click = setTimeout(() =>{
            cria.src = estados.alimentado
            time_out = setTimeout (() =>{
                cria.src = estados.normal;
            },2000);
        },1000);
}

const fundoDia   = "img/bg.png";
const fundoNoite = "img/bgnoite.png";

let horas = 0;
let intervaloHoras = null; 

function atualizarFundo() {
    const estrelas = document.getElementById("estrelas");

    if (horas >= 6 && horas < 18) {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
        estrelas.classList.remove("visivel");
    } else {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
        estrelas.classList.add("visivel");
    }

    const tema = document.getElementById("tema");
    if (tema) tema.checked = horas < 6 || horas >= 18;
}

function iniciarCicloDia() {
    if (intervaloHoras) clearInterval(intervaloHoras);

    intervaloHoras = setInterval(() => {
        horas++;
        if (horas >= 24) horas = 0;

        console.log("horas:", horas);
        atualizarFundo();
    }, 1000); 
}

const tema = document.getElementById("tema");
if (tema) {
    tema.addEventListener("change", () => {
        if (tema.checked) {
            horas = 18; 
        } else {
            horas = 6;  
        }
        atualizarFundo();
    });
}

function gerarEstrelas() {
    const container = document.getElementById("estrelas");
    container.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        const estrela = document.createElement("div");
        estrela.classList.add("estrela");

        estrela.style.top  = Math.random() * 100 + "%";
        estrela.style.left = Math.random() * 100 + "%";

        const tamanho = Math.random() * 3 + 1 + "px";
        estrela.style.width  = tamanho;
        estrela.style.height = tamanho;

        estrela.style.animationDelay    = Math.random() * 3 + "s";
        estrela.style.animationDuration = Math.random() * 2 + 1.5 + "s";

        container.appendChild(estrela);
    }
}

controlador();
iniciarCicloDia();
atualizarFundo();
gerarEstrelas();