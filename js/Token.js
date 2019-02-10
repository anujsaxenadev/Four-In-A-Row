// Class for Tokens
class Token{
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    /**
     * Creating HTML for Token.
     */
    drawHTMLToken(){
        const tokenDiv = document.createElement('div');
        document.querySelector('#game-board-underlay').appendChild(tokenDiv);
        tokenDiv.setAttribute('id', this.id);
        tokenDiv.setAttribute('class', 'token');
        tokenDiv.style.backgroundColor = this.owner.color;
    }

    /**
     * getter method for HTML Token.
     * @return {element} Getting html for the token.
     */
    get HTMLToken(){
        return this.drawHTMLToken();
    }
}