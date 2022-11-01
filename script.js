class Game {
    constructor() {
        this.matrix = [
            "a", "b", "c",
            "d", "e", "f",
            "g", "h", "i"
        ];
        this.player = {
            O: ["joão", 0],
            X: ["zé", 0]
        };
        this.orderGame = [];
        
    }

    startGame() {
        //limpa o tabuleiro
        let start = document.querySelectorAll("td");
        start.forEach((item) => item.textContent = "");
        this.matrix = [
            "a", "b", "c",
            "d", "e", "f",
            "g", "h", "i"
        ];
        
        this.orderGame = [];
        
    }

    checkResult() {
        let winnerName = "";
        let resultado = "";
        if (this.matrix[0] === this.matrix[1] && this.matrix[1] === this.matrix[2] ||
            this.matrix[3] === this.matrix[4] && this.matrix[4] === this.matrix[5] ||
            this.matrix[6] === this.matrix[7] && this.matrix[7] === this.matrix[8] ||
            this.matrix[0] === this.matrix[3] && this.matrix[3] === this.matrix[6] ||
            this.matrix[1] === this.matrix[4] && this.matrix[4] === this.matrix[7] ||
            this.matrix[2] === this.matrix[5] && this.matrix[5] === this.matrix[8] ||
            this.matrix[0] === this.matrix[4] && this.matrix[4] === this.matrix[8] ||
            this.matrix[2] === this.matrix[4] && this.matrix[4] === this.matrix[6]) {
            //verificar quem fez a última jogada e anunciá-lo como vencedor
            let winner = this.orderGame[this.orderGame.length - 1];
            winnerName = this.player[winner][0];
            resultado = `${winnerName} é o vencedor!`
            return resultado;
        } else if (this.orderGame.length === 9){
            resultado = `Vocês empataram!`;
            return resultado;
        } else {
          return 0;
        }
        
    }

    score(winner) {
        let score = this.player[winner][1] + 1;
        this.player[winner][1] = score;
        return this.player[winner][1];
    }
    

    fillCell(indice){
        
        if (this.matrix[indice] === 0 || this.matrix[indice] === 1){
            let msg = "Campo já preenchido!";
            return msg;
        }
        
        let symbol = "";
        let valor = 0;
        let lastplayer = this.orderGame.length - 1;
        if (lastplayer >= 0){
            let player = this.orderGame[lastplayer];
            if (player === "O"){
                symbol = "X"
                valor = 1;
            } else {
                symbol = "O"
                valor = 0;
            }
        } else {
            symbol = "O"
            valor = 0;
        }

        this.orderGame.push(symbol);
        this.matrix.splice(indice, 1, valor);
                
        return symbol;
    }
}


