import { Component } from "react";
import Heading from "./components/heading";
import Button from "./components/button";
import Game from "./components/gameplay";
import  Alert  from "./components/Alert";
import "./App.css"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      alertButton: true,
    }
  }
  render () {
    return (
      <div className="App">
        <main>
          <Heading className="onscreen"/>
          <Game />
        </main>
        <Alert trigger={this.state.alertButton}>
          <h3>Memory Game</h3>
          <p>Click <button className="startBtn" onClick={() => {this.setState({alertButton: false})}}>start</button> to begin!</p>
        </Alert>
      </div>
    )
  }
}

export default App;