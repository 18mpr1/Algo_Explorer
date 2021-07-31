
// <Randomize> <Array Size slider> <Speed slider> <Bubble Sort>
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import '../styling/buttons.css';


function ButtonsBar(){

    return(
        <div id="bar">
            <h1 id="title"><b>Algo-Explorer</b></h1>
            <div className="buttons">

                <button className="fill">Cocktail Sort</button>
                <button className="fill">Bogo Sort</button>
                <button className="fill">Merge Sort</button>
                <button className="fill">Quick Sort</button>
                <button className="fill">Bubble Sort</button>
                <button className="offset">Reset</button>

                {/*<button className="fill">Fill</button>
                <button className="pulse">Pulse</button>
                <button className="close">Close</button>
                <button className="raise">Raise</button>
                <button className="up">Fill Up</button>
                <button className="slide">Slide</button>
                <button className="offset">Offset</button>*/}
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
    )
}

export default ButtonsBar;
