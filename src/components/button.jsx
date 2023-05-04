import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props) 
    }
    

    render() {
        return (
         <button id={this.props.id} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}</button>
        )
    }
}

export default Button;