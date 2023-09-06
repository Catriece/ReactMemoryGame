import { Component } from "react";
import Button from "./button";
import App from "../App";
import Alert from "./Alert";

import circle from "../assets/images/circle.JPG";
import cloud from "../assets/images/cloud.JPG";
import cross from "../assets/images/cross.JPG";
import downArrow from "../assets/images/down-arrow.JPG";
import downTriangle from "../assets/images/down-triangle.JPG";
import eightPointStar from "../assets/images/eight-point-star.JPG";
import fourPointStar from "../assets/images/four-point-star.JPG";
import heart from "../assets/images/heart.JPG";
import leftArrow from "../assets/images/left-arrow.JPG";
import leftRightArrow from "../assets/images/left-right-arrow.JPG";
import leftTriangle from "../assets/images/left-triangle.JPG";
import octagon from "../assets/images/octagon.JPG";
import pacmanGhost from "../assets/images/pacman-ghost.JPG";
import parallelogram from "../assets/images/parallelogram.JPG";
import pentagon from "../assets/images/pentagon.JPG";
import rhombus from "../assets/images/rhombus.JPG";
import rightArrow from "../assets/images/right-arrow.JPG";
import rightTriangle from "../assets/images/right-triangle.JPG";
import sixPointTriangle from "../assets/images/six-point-triangle.JPG";
import square from "../assets/images/square.JPG";
import star from "../assets/images/star.JPG";
import trapazoid from "../assets/images/trapazoid.JPG";
import triangle from "../assets/images/triangle.JPG";
import upArrow from "../assets/images/up-arrow.JPG";

const imageData = [
  {
    imageUrl: circle,
    id: 1,
    seen: false,
    alt: "circle shape",
  },

  {
    imageUrl: cloud,
    id: 2,
    seen: false,
    alt: "cloud shape",
  },
  {
    imageUrl: cross,
    id: 3,
    seen: false,
    alt: "cross shape",
  },
  {
    imageUrl: downArrow,
    id: 4,
    seen: false,
    alt: "down arrow",
  },
  {
    imageUrl: downTriangle,
    id: 5,
    seen: false,
    alt: "upside down triangle",
  },
  {
    imageUrl: eightPointStar,
    id: 6,
    seen: false,
    alt: "eight point star",
  },
  {
    imageUrl: fourPointStar,
    id: 7,
    seen: false,
    alt: "four point star",
  },
  {
    imageUrl: heart,
    id: 8,
    seen: false,
    alt: "heart shape",
  },
  {
    imageUrl: leftArrow,
    id: 9,
    seen: false,
    alt: "left arrow",
  },
  {
    imageUrl: leftRightArrow,
    id: 10,
    seen: false,
    alt: "left and right arrow",
  },
  {
    imageUrl: leftTriangle,
    id: 11,
    seen: false,
    alt: "left pointed triangle",
  },
  {
    imageUrl: octagon,
    id: 12,
    seen: false,
    alt: "octagon",
  },
  {
    imageUrl: pacmanGhost,
    id: 13,
    seen: false,
    alt: "pacman ghost shape",
  },
  {
    imageUrl: parallelogram,
    id: 14,
    seen: false,
    alt: "parallelogram",
  },
  {
    imageUrl: pentagon,
    id: 15,
    seen: false,
    alt: "pentagon",
  },
  {
    imageUrl: rhombus,
    id: 16,
    seen: false,
    alt: "rhombus",
  },
  {
    imageUrl: rightArrow,
    id: 17,
    seen: false,
    alt: "right pointed arrow",
  },
  {
    imageUrl: rightTriangle,
    id: 18,
    seen: false,
    alt: "right pointed triangle",
  },
  {
    imageUrl: sixPointTriangle,
    id: 19,
    seen: false,
    alt: "six point triangle",
  },
  {
    imageUrl: square,
    id: 20,
    seen: false,
    alt: "square",
  },
  {
    imageUrl: star,
    id: 21,
    seen: false,
    alt: "star",
  },
  {
    imageUrl: trapazoid,
    id: 22,
    seen: false,
    alt: "trapazoid",
  },
  {
    imageUrl: triangle,
    id: 23,
    seen: false,
    alt: "triangle",
  },
  {
    imageUrl: upArrow,
    id: 24,
    seen: false,
    alt: "upward arrow",
  },
];

//IDENTICAL ARRAY FOR IMAGE DATA REMOVAL
let imageData2 = [
  {
    imageUrl: circle,
    id: 1,
    seen: false,
    alt: "circle shape",
  },

  {
    imageUrl: cloud,
    id: 2,
    seen: false,
    alt: "cloud shape",
  },
  {
    imageUrl: cross,
    id: 3,
    seen: false,
    alt: "cross shape",
  },
  {
    imageUrl: downArrow,
    id: 4,
    seen: false,
    alt: "down arrow",
  },
  {
    imageUrl: downTriangle,
    id: 5,
    seen: false,
    alt: "upside down triangle",
  },
  {
    imageUrl: eightPointStar,
    id: 6,
    seen: false,
    alt: "eight point star",
  },
  {
    imageUrl: fourPointStar,
    id: 7,
    seen: false,
    alt: "four point star",
  },
  {
    imageUrl: heart,
    id: 8,
    seen: false,
    alt: "heart shape",
  },
  {
    imageUrl: leftArrow,
    id: 9,
    seen: false,
    alt: "left arrow",
  },
  {
    imageUrl: leftRightArrow,
    id: 10,
    seen: false,
    alt: "left and right arrow",
  },
  {
    imageUrl: leftTriangle,
    id: 11,
    seen: false,
    alt: "left pointed triangle",
  },
  {
    imageUrl: octagon,
    id: 12,
    seen: false,
    alt: "octagon",
  },
  {
    imageUrl: pacmanGhost,
    id: 13,
    seen: false,
    alt: "pacman ghost shape",
  },
  {
    imageUrl: parallelogram,
    id: 14,
    seen: false,
    alt: "parallelogram",
  },
  {
    imageUrl: pentagon,
    id: 15,
    seen: false,
    alt: "pentagon",
  },
  {
    imageUrl: rhombus,
    id: 16,
    seen: false,
    alt: "rhombus",
  },
  {
    imageUrl: rightArrow,
    id: 17,
    seen: false,
    alt: "right pointed arrow",
  },
  {
    imageUrl: rightTriangle,
    id: 18,
    seen: false,
    alt: "right pointed triangle",
  },
  {
    imageUrl: sixPointTriangle,
    id: 19,
    seen: false,
    alt: "six point triangle",
  },
  {
    imageUrl: square,
    id: 20,
    seen: false,
    alt: "square",
  },
  {
    imageUrl: star,
    id: 21,
    seen: false,
    alt: "star",
  },
  {
    imageUrl: trapazoid,
    id: 22,
    seen: false,
    alt: "trapazoid",
  },
  {
    imageUrl: triangle,
    id: 23,
    seen: false,
    alt: "triangle",
  },
  {
    imageUrl: upArrow,
    id: 24,
    seen: false,
    alt: "upward arrow",
  },
];

const images = imageData.map((image) => {
  return image.imageUrl;
});

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: Math.floor(Math.random() * images.length),
      bestscore: 0,
      currentscore: 0,
    };
    this.choseNo = this.choseNo.bind(this);
    this.choseYes = this.choseYes.bind(this);
    this.updateCurrentScore = this.updateCurrentScore.bind(this);
    this.updateBestScore = this.updateBestScore.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // BUTTONS FOR CHOICES

  choseYes() {
    if (imageData[this.state.imageIndex].seen === true) {
      console.log("CORRECT!");
      this.setState({ imageIndex: Math.floor(Math.random() * images.length) });
      this.updateCurrentScore(1);
      this.updateBestScore(1);
    } else if (imageData[this.state.imageIndex].seen != true) {
      this.resetGame();
      alert("So Sorry! You have not seen this image before! Please try again!");
    }
  }

  choseNo() {
    if (imageData[this.state.imageIndex].seen != true) {
      imageData[this.state.imageIndex].seen = true;
      console.log("CORRECT! You have not seen this image before");
      this.setState({ imageIndex: Math.floor(Math.random() * images.length) });
      this.updateCurrentScore(1);
      this.updateBestScore(1);

      this.removeArrData();
    } else if (imageData[this.state.imageIndex].seen === true) {
      this.resetGame();
      alert("So Sorry! You have seen this image before! Please try again!");
    }

    if (imageData2.length === 0) {
      this.resetGame();
      alert("Congrats friend! You have an amazing memory!");
    }

    console.log(imageData2);
  }

  // UPDATING SCORES
  updateCurrentScore(unit) {
    this.setState({ currentscore: this.state.currentscore + unit });
  }

  updateBestScore(unit) {
    if (this.state.currentscore >= this.state.bestscore) {
      this.setState({ bestscore: this.state.bestscore + unit });
    }
  }

  //GAME RESET FUNCTIONS
  resetGame() {
    //CURRENT SCORE RESET && IMAGE 'SEEN' PROPERTY RESET
    this.setState({ currentscore: 0 });
    imageData.forEach((image) => {
      image.seen = false;
    });

    //CALL, RESET, AND RANDOMIZE NEW DATA REMOVAL ARRAY
    imageData2 = [].concat(imageData);
    imageData2.sort(() => Math.random() - 0.5);
  }

  removeArrData() {
    imageData2 = imageData2.filter((image) => {
      return image.id != imageData[this.state.imageIndex].id;
    });
  }

  // CREATE & DISPLAY IMAGES
  randomImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    this.setState({
      imageIndex: randomNumber,
    });
  };

  componentDidMount() {
    this.randomImage();
  }

  render() {
    return (
      <div className="display">
        <div className="d-flex justify-content-center align-items-center">
          <p id="bestScore" name="bestScore" className="scores onscreen">
            {"Best Score: " + this.state.bestscore}
          </p>
          <p id="currentScore" name="currentScore" className="scores onscreen">
            {"      " + "Current Score: " + this.state.currentscore}
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={images[this.state.imageIndex]}
            width="300"
            height="300"
          ></img>
          <br />
          <p className="p-element">Have you seen this image before?</p>
          <br />
          <div className="buttons">
            <Button id="noBtn" onClick={this.choseYes}>
              Yes
            </Button>
            <Button id="yesBtn" onClick={this.choseNo}>
              No
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
