// Class for Game
class Game{
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers(){
        const players = [   new Player("Player 1", 1, "#e15258", true), 
                            new Player("Player 2", 2, "#e59a13")];
        return players;
    }

    /**
     * get active player
     * @return {object} player who's turn is next.
     */
    get activePlayer(){
        return this.players.find(player => player.active);
    }

    /*
     * Start The Game
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Handel Key Down Method
     * @param {object} event - keydown event object
     */
    handelkeydown(event){
        if(this.ready){
            let key = event.key;
            if(key == "ArrowRight"){
                this.activePlayer.activeToken.moveRight(this.board.columns);
            }
            else if(key == "ArrowDown"){
                this.playToken();
            }
            else if(key == "ArrowLeft"){
                this.activePlayer.activeToken.moveLeft();
            }
        }
    }

    /**
     * Method for Token Logic.
     */
    playToken(){
        let targetSpace = null;
        let activeToken = this.activePlayer.activeToken;
        for(let i = 0; i < this.board.rows; i++){
            let currentSpace = this.board.spaces[activeToken.columnLocation][i];
            if(currentSpace.token === null){
                targetSpace = currentSpace;
            }
            else{
                break;
            }
        }
        if(targetSpace != null){
            const game = this;
            game.ready = false;

            activeToken.drop(targetSpace, function(){
                game.updateGameState(activeToken, targetSpace);
            });
        }
    }

    /**
     * Method to check for which Player wins.
     */
    checkForWin(target){
        const owner = target.owner;
        let win = false;

        //vertical
        for(let i = 0 ; i < this.board.columns; i++){
            for(let j = 0; j < this.board.rows - 3; j++){
                if( this.board.spaces[i][j].owner == owner &&
                    this.board.spaces[i][j + 1].owner == owner &&
                    this.board.spaces[i][j + 2].owner == owner &&
                    this.board.spaces[i][j + 3].owner == owner){
                        win = true;
                    }
            }
        }

        //horizontal
        for(let i = 0; i < this.board.columns - 3; i++){
            for(let j = 0; j < this.board.rows; j++){
                if( this.board.spaces[i][j].owner == owner &&
                    this.board.spaces[i + 1][j].owner == owner &&
                    this.board.spaces[i + 2][j].owner == owner &&
                    this.board.spaces[i + 3][j].owner == owner){
                        win = true;
                    }
            }
        }

        //diagonal
        for(let i = 3; i < this.board.columns; i++){
            for(let j = 3; j < this.board.rows; j++){
                if( this.board.spaces[i][j].owner == owner &&
                    this.board.spaces[i - 1][j - 1].owner == owner &&
                    this.board.spaces[i - 2][j - 2].owner == owner &&
                    this.board.spaces[i - 3][j - 3].owner == owner){
                        win = true;
                    }
            }
        }

        // other diagonal
        for(let i = 3; i < this.board.columns; i++){
            for(let j = 0; j < this.board.rows - 3; j++){
                if( this.board.spaces[i][j].owner == owner &&
                    this.board.spaces[i - 1][j + 1].owner == owner &&
                    this.board.spaces[i - 2][j + 2].owner == owner &&
                    this.board.spaces[i - 3][j + 3].owner == owner){
                        win = true;
                    }
            }
        }
        return win;
    }

    /**
     * Method to switch players for next turn.
     */
    switchPlayers(){
        for(let player of this.players){
            if(player.active == true){
                player.active = false;
            }
            else{
                player.active = true;
            }
        }
    }
}