import { Component } from "react";
import Button from "./button"
import App from "../App"
import  Alert  from "./Alert";


const  imageData = [
    {
        imageUrl: "/images/circle.JPG",
        id: 1,
        seen: false,
        alt: "circle shape"
    },

    {
        imageUrl:"/images/cloud.JPG",
        id: 2,
        seen: false,
        alt: "cloud shape"
    },
    {
        imageUrl:"/images/cross.JPG",
        id: 3,
        seen: false,
        alt: "cross shape"
    },
    {
        imageUrl:"/images/down-arrow.JPG",
        id: 4,
        seen: false,
        alt: "down arrow"
    },
    {
        imageUrl:"/images/down-triangle.JPG",
        id: 5,
        seen: false,
        alt: "upside down triangle"
    },
    {
        imageUrl:"/images/eight-point-star.JPG",
        id: 6,
        seen: false,
        alt: "eight point star"
    },
    {
        imageUrl:"/images/four-point-star.JPG",
        id: 7,
        seen: false,
        alt: "four point star"
    },
    {
        imageUrl:"/images/heart.JPG",
        id: 8,
        seen: false,
        alt: "heart shape"
    },
    {
        imageUrl:"/images/left-arrow.JPG",
        id: 9,
        seen: false,
        alt: "left arrow"
    },
    {
        imageUrl:"/images/left-right-arrow.JPG",
        id: 10,
        seen: false,
        alt: "left and right arrow"
    },
    {
        imageUrl:"/images/left-triangle.JPG",
        id: 11,
        seen: false,
        alt: "left pointed triangle"
    },
    {
        imageUrl:"/images/octagon.JPG",
        id: 12,
        seen: false,
        alt: "octagon"
    },
    {
        imageUrl:"/images/pacman-ghost.JPG",
        id: 13,
        seen: false,
        alt: "pacman ghost shape"
    },
    {
        imageUrl:"/images/parallelogram.JPG",
        id: 14,
        seen: false,
        alt: "parallelogram"
    },
    {
        imageUrl:"/images/pentagon.JPG",
        id: 15,
        seen: false,
        alt: "pentagon"
    },
    {
        imageUrl:"/images/rhombus.JPG",
        id: 16,
        seen: false,
        alt: "rhombus"
    },
    {
        imageUrl:"/images/right-arrow.JPG",
        id: 17,
        seen: false,
        alt: "right pointed arrow"
    },
    {
        imageUrl:"/images/right-triangle.JPG",
        id: 18,
        seen: false,
        alt: "right pointed triangle"
    },
    {
        imageUrl:"/images/six-point-triangle.JPG",
        id: 19,
        seen: false,
        alt: "six point triangle"
    },
    {
        imageUrl:"/images/square.JPG",
        id: 20,
        seen: false,
        alt: "square"
    },
    {
        imageUrl:"/images/star.JPG",
        id: 21,
        seen: false,
        alt: "star"
    },
    {
        imageUrl:"/images/trapazoid.JPG",
        id: 22,
        seen: false,
        alt: "trapazoid"
    },
    {
        imageUrl:"/images/triangle.JPG",
        id: 23,
        seen: false,
        alt: "triangle"
    },
    {
        imageUrl:"/images/up-arrow.JPG",
        id: 24,
        seen: false,
        alt: "upward arrow"
    },
]

//IDENTICAL ARRAY FOR IMAGE DATA REMOVAL
let  imageData2 = [
    {
        imageUrl: "/images/circle.JPG",
        id: 1,
        seen: false,
        alt: "circle shape"
    },

    {
        imageUrl:"/images/cloud.JPG",
        id: 2,
        seen: false,
        alt: "cloud shape"
    },
    {
        imageUrl:"/images/cross.JPG",
        id: 3,
        seen: false,
        alt: "cross shape"
    },
    {
        imageUrl:"/images/down-arrow.JPG",
        id: 4,
        seen: false,
        alt: "down arrow"
    },
    {
        imageUrl:"/images/down-triangle.JPG",
        id: 5,
        seen: false,
        alt: "upside down triangle"
    },
    {
        imageUrl:"/images/eight-point-star.JPG",
        id: 6,
        seen: false,
        alt: "eight point star"
    },
    {
        imageUrl:"/images/four-point-star.JPG",
        id: 7,
        seen: false,
        alt: "four point star"
    },
    {
        imageUrl:"/images/heart.JPG",
        id: 8,
        seen: false,
        alt: "heart shape"
    },
    {
        imageUrl:"/images/left-arrow.JPG",
        id: 9,
        seen: false,
        alt: "left arrow"
    },
    {
        imageUrl:"/images/left-right-arrow.JPG",
        id: 10,
        seen: false,
        alt: "left and right arrow"
    },
    {
        imageUrl:"/images/left-triangle.JPG",
        id: 11,
        seen: false,
        alt: "left pointed triangle"
    },
    {
        imageUrl:"/images/octagon.JPG",
        id: 12,
        seen: false,
        alt: "octagon"
    },
    {
        imageUrl:"/images/pacman-ghost.JPG",
        id: 13,
        seen: false,
        alt: "pacman ghost shape"
    },
    {
        imageUrl:"/images/parallelogram.JPG",
        id: 14,
        seen: false,
        alt: "parallelogram"
    },
    {
        imageUrl:"/images/pentagon.JPG",
        id: 15,
        seen: false,
        alt: "pentagon"
    },
    {
        imageUrl:"/images/rhombus.JPG",
        id: 16,
        seen: false,
        alt: "rhombus"
    },
    {
        imageUrl:"/images/right-arrow.JPG",
        id: 17,
        seen: false,
        alt: "right pointed arrow"
    },
    {
        imageUrl:"/images/right-triangle.JPG",
        id: 18,
        seen: false,
        alt: "right pointed triangle"
    },
    {
        imageUrl:"/images/six-point-triangle.JPG",
        id: 19,
        seen: false,
        alt: "six point triangle"
    },
    {
        imageUrl:"/images/square.JPG",
        id: 20,
        seen: false,
        alt: "square"
    },
    {
        imageUrl:"/images/star.JPG",
        id: 21,
        seen: false,
        alt: "star"
    },
    {
        imageUrl:"/images/trapazoid.JPG",
        id: 22,
        seen: false,
        alt: "trapazoid"
    },
    {
        imageUrl:"/images/triangle.JPG",
        id: 23,
        seen: false,
        alt: "triangle"
    },
    {
        imageUrl:"/images/up-arrow.JPG",
        id: 24,
        seen: false,
        alt: "upward arrow"
    },
]

const images = imageData.map((image) => {
    return image.imageUrl})


class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageIndex: Math.floor(Math.random() * images.length),
            bestscore: 0,
            currentscore: 0,
        }
        this.choseNo = this.choseNo.bind(this);
        this.choseYes = this.choseYes.bind(this);
        this.updateCurrentScore = this.updateCurrentScore.bind(this); 
        this.updateBestScore = this.updateBestScore.bind(this); 
        this.resetGame = this.resetGame.bind(this);
    }
 
// BUTTONS FOR CHOICES



    choseYes() {
        if(imageData[this.state.imageIndex].seen === true) {
            console.log("CORRECT!")
            this.setState({imageIndex: Math.floor(Math.random() * images.length)});
            this.updateCurrentScore(1);
            this.updateBestScore(1);

        } else if (imageData[this.state.imageIndex].seen != true) {
            this.resetGame();
            alert("So Sorry! You have not seen this image before! Please try again!");

        }
    }
    
    choseNo(){
        if(imageData[this.state.imageIndex].seen != true) {
            imageData[this.state.imageIndex].seen = true;
            console.log("CORRECT! You have not seen this image before")
            this.setState({imageIndex: Math.floor(Math.random() * images.length)}
            );
            this.updateCurrentScore(1);
            this.updateBestScore(1);

            this.removeArrData();

        } else if (imageData[this.state.imageIndex].seen === true){
            this.resetGame();
            alert("So Sorry! You have seen this image before! Please try again!");
            
        
        }
        
        if (imageData2.length === 0) {
            this.resetGame();
            alert("Congrats friend! You have an amazing memory!");
        }

        console.log(imageData2)
    }

// UPDATING SCORES
    updateCurrentScore (unit) {
       this.setState({ currentscore: this.state.currentscore + unit});

    }

    updateBestScore (unit) {
        if(this.state.currentscore >= this.state.bestscore) {
            this.setState({bestscore: this.state.bestscore + unit});
        }
    }

//GAME RESET FUNCTIONS
    resetGame() {
        //CURRENT SCORE RESET && IMAGE 'SEEN' PROPERTY RESET
        this.setState({ currentscore: 0 });
        imageData.forEach((image) => {
            image.seen = false;
        })

        //CALL, RESET, AND RANDOMIZE NEW DATA REMOVAL ARRAY
        imageData2 = [].concat(imageData)
        imageData2.sort(() => Math.random() - 0.5);
    }

    removeArrData() {
        imageData2 = imageData2.filter((image) => {
            return image.id != imageData[this.state.imageIndex].id
        })
    }


    // CREATE & DISPLAY IMAGES
    randomImage = () => {
        const randomNumber = Math.floor(Math.random() * images.length);
        this.setState({
            imageIndex: randomNumber
        });
    }

    componentDidMount() {
        this.randomImage();
    }


  render() {
        return (
            <div className="display">
                <div className="d-flex justify-content-center align-items-center">
                   <p id="bestScore" name="bestScore" className="scores onscreen">{"Best Score: " + this.state.bestscore}</p>
                    <p id="currentScore" name="currentScore" className="scores onscreen">{"      " + "Current Score: " + this.state.currentscore}</p> 
                </div>
                <div className="d-flex justify-content-center align-items-center">
                   <img src={images[this.state.imageIndex]} width="300" height="300"></img>
                    <br />
                    <p className="p-element">Have you seen this image before?</p>
                    <br />
                    <div className="buttons" >
                    <Button id="noBtn" onClick={this.choseYes}>Yes</Button> 
                    <Button id="yesBtn" onClick={this.choseNo}>No</Button>
                     
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Game;