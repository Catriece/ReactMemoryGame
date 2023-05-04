import { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props) 
        
        this.player = {
            name: "Catriece",//window.prompt("What is your name?"),
        }


    }
    
    render() {
        return (
            <>
                <h3>Hey there, {this.player.name}!</h3>
                <h3>Let's test your memory!</h3>
            </>
        )
    }
}

export default Player;