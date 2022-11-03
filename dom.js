const game = new Game();

//ids starScreen
const startScreen = document.getElementById("startScreen");
const nwp1 = document.getElementById("nwp1");
const nwp2 = document.getElementById("nwp2");
const btnStart = document.getElementById("btnStart");


//ids gameScreen
const gameScreen = document.getElementById("gameScreen");
const boardGame = document.getElementById("boardGame");
const cellA1 = document.getElementById("A1");
const cellB1 = document.getElementById("B1");
const cellC1 = document.getElementById("C1");
const cellA2 = document.getElementById("A2");
const cellB2 = document.getElementById("B2");
const cellC2 = document.getElementById("C2");
const cellA3 = document.getElementById("A3");
const cellB3 = document.getElementById("B3");
const cellC3 = document.getElementById("C3");
const btnNewGame = document.getElementById("btnNewGame");
const nameO = document.getElementById("nameO");
const nameX = document.getElementById("nameX");
const scoreO = document.getElementById("scoreO");
const scoreX = document.getElementById("scoreX");


//ids modalScreen
const btnOpen = document.getElementById("btnOpen");
const btnOk = document.getElementById("btnOk");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");
const msgModal = document.getElementById("msgModal");
const imageModal = document.getElementById("imageModal");
const vencedor = "./vencedor.png";
const empate = "./empate.png";

//eventos

btnStart.addEventListener("click", (event) => {
    event.preventDefault();

    if (nwp1.value === "" || nwp2.value === "") {
        alert("Digite os nomes dos jogadores!")
        return;
    }

    game.player["O"][0] = nwp1.value;
    game.player["X"][0] = nwp2.value;
    game.player["O"][1] = 0;
    game.player["X"][1] = 0;

    nameO.innerText = nwp1.value;
    nameX.innerText = nwp2.value;
    scoreO.innerText = "0";
    scoreX.innerText = "0";


    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    boardGame.className = "O";


    startGame();

})

btnNewGame.addEventListener("click", (event) => {
    event.preventDefault();
    game.startGame();
    nwp1.value = "";
    nwp2.value = "";
    startScreen.style.display = "flex";
    gameScreen.style.display = "none";
})

function startGame(){
    eraseClass();
    game.startGame();
}


function verifyCell(n, cell) {
    if (cell.innerText === "") {
        let retorno = game.fillCell(n);
        cell.innerText = retorno;
        cell.className = "fill";
        if (retorno === "O"){
            boardGame.className = "X";
        } else {
            boardGame.className = "O";
        }
        let check = game.checkResult();
        console.log(check);
        let option = check[0];
        let winner = check[1];
        if (option === 1){
            let scoreText = game.score(retorno);
            if (retorno === "X") {
                scoreX.innerText = scoreText;
            } else {
                scoreO.innerText = scoreText;
            }
            setTimeout(() => game.startGame(), 1000);
            let msg = winner + " venceu!";
            toggleModal(msg, vencedor);
            } else if (option === 2){
            setTimeout(() => game.startGame(), 1000);
            let msg = "Empate!";
            toggleModal(msg, empate);
        }
    } else {
        alert("Campo já selecionado. Escolha outro");
    }
}


cellA1.addEventListener("click", () => verifyCell(0, cellA1));

cellB1.addEventListener("click", () => verifyCell(1, cellB1));

cellC1.addEventListener("click", () => verifyCell(2, cellC1));

cellA2.addEventListener("click", () => verifyCell(3, cellA2));

cellB2.addEventListener("click", () => verifyCell(4, cellB2));

cellC2.addEventListener("click", () => verifyCell(5, cellC2));

cellA3.addEventListener("click", () => verifyCell(6, cellA3));

cellB3.addEventListener("click", () => verifyCell(7, cellB3));

cellC3.addEventListener("click", () => verifyCell(8, cellC3));


/*função modal*/
function toggleModal(msg, img) {
    if(msg != undefined && img != undefined){
    imageModal.src = img;
    msgModal.textContent = msg;
    }
    [modal, fade].forEach((el) => el.classList.toggle("hide")); //toggle - alternância da classe - 
                                                                //se está, é removida; caso contrário é adicionada    
    
};

function eraseClass(){
    [cellA1, cellB1, cellC1, cellA2, cellB2, cellC2, cellA3, cellB3, cellC3].forEach((item) => {
        item.className = " ";
        console.log(item.className.value);
    });
};

btnOk.addEventListener("click", () => {
    toggleModal();
    eraseClass();
});