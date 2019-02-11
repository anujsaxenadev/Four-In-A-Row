// Class for Players
class Player{
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param   {integer}   num - Number of token objects to be created
     * @return  {array}     tokens - an arary of new token objects
     */
    createTokens(num){
        const tokens = [];

        for(let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    /**
     * get the next active token.
     * @return {object} first token object in unused tokens.
     */
    get activeToken(){
        return this.unusedTokens[0];
    }

    /**
     * To get unused tokens for the Player.
     * @return {array} Array of unused tokens
     */
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

    /**
     * Method for checking for remaining unused tokens for a player.
     * @return {boolean} true if there are remaining tokens else false.
     */
    checkTokens(){
        if(this.unusedTokens.length == 0){
            return false;
        }
        else{
            return true;
        }
    }
}
