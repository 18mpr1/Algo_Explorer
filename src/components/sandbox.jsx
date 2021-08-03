import React from "react";
import '../styling/sandbox.css';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 290;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'purple';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

function refreshPage(){
    window.location.reload(false);
}

export default class Sandbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }






    render() {
        const {array} = this.state;

        return (
            <>
                <div id="bar">
                    <h1 id="title"><b>Algo-Explorer</b></h1>
                    <div className="buttons">
                        <button className="fill"><b>Cocktail Sort</b></button>
                        <button className="fill"><b>Bogo Sort</b></button>
                        <button className="fill"><b>Merge Sort</b></button>
                        <button className="fill"><b>Quick Sort</b></button>
                        <button className="fill"><b>Bubble Sort</b></button>
                        <button className="offset" onClick={refreshPage}><b>Reset</b></button>
                    </div>
                    <div className="slidecontainer">
                        <Typography id="non-linear-slider" gutterBottom>
                            <b>Animation Speed</b>
                        </Typography>
                        <Slider />
                        <Typography id="non-linear-slider" gutterBottom>
                            <b>Number of Items</b>
                        </Typography>
                        <Slider />
                    </div>
                </div>


                <div className="array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`,
                            }}/>
                    ))}
                </div>
            </>

        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}