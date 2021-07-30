
// <Randomize> <Array Size slider> <Speed slider> <Bubble Sort>
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


function ButtonsBar(){

    return(
        <div id="bar">
            <h1>Algo-Explorer</h1>
            <button><b>Reset</b></button>
            <button><b>Bubble Sort</b></button>
            <button><b>Quick Sort</b></button>
            <button><b>Merge Sort</b></button>
            <button><b>Insertion Sort</b></button>

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
