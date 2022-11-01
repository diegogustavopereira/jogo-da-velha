const game = new Game();

const cellA1 = document.getElementById("A1");
const cellB1 = document.getElementById("B1");
const cellC1 = document.getElementById("C1");
const cellA2 = document.getElementById("A2");
const cellB2 = document.getElementById("B2");
const cellC2 = document.getElementById("C2");
const cellA3 = document.getElementById("A3");
const cellB3 = document.getElementById("B3");
const cellC3 = document.getElementById("C3");
const btnStart = document.getElementById("btnStart");
const scoreO = document.getElementById("scoreO");
const scoreX = document.getElementById("scoreX");

btnStart.addEventListener("click", (event) => {
    event.preventDefault();
    game.startGame();
})


function verifyCell(n, cell) {
    if (cell.innerText === "") {
        console.log("ok");
        let retorno = game.fillCell(n);
        cell.innerText = retorno;
        let check = game.checkResult();
        console.log(check);
        if (check != 0) {
            let scoreText = game.score(retorno);
            if (retorno === "X") {
                scoreX.innerText = scoreText;
            } else {
                scoreO.innerText = scoreText;
            }
            setTimeout(() => { alert(check)}, 1);
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







