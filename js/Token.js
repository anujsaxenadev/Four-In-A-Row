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

    /**
     * getter method for returning the offsetLeft Value of HTMLToken
     * @return {number} offsetLeft Value.
     */
    get offsetLeft(){
        return this.HTMLToken.offsetLeft;
    }

    /**
     * Method to move token to the left.
     */
    moveLeft(){
        if(this.columnLocation > 0){
            this.HTMLToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    /**
     * Method to move token to the Right.
     */
    moveRight(columns){
        if(this.columnLocation < columns - 1){
            this.HTMLToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }

    /**
     * Method to drop the current active token to the target.
     * @param {object} target space.
     * @param {callback} callback function to the drop method.
     */
    drop(target, reset){
        this.dropped = true;
        $(`#${this.id}`).animate({
            top: (target.y * target.diameter)
        },750, 'easeOutBounce', reset);
    }
}