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
                // Move Right
            }
            else if(key == "ArrowDown"){
                // Drop Token in the Collumn
            }
            else if(key == "ArrowLeft"){
                // Move Left
            }
        }
    }
}