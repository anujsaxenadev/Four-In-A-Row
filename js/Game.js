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
     * Handel Key Down
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
            game.ready = false;
            activeToken.drop(targetSpace);
        }
    }
}