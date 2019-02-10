// Class for Tokens
class Token{
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
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
        return document.querySelector(`#${this.id}`);
    }

    get offsetLeft(){
        return this.HTMLToken.offsetLeft;
    }

    moveLeft(){
        if(this.columnLocation > 0){
            this.HTMLToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    moveRight(columns){
        if(this.columnLocation < columns - 1){
            this.HTMLToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }

    drop(target, reset){
        this.dropped = true;
        $(`#${this.id}`).animate({
            top: (target.y * target.diameter)
        },750, 'easeOutBounce', reset);
    }
}