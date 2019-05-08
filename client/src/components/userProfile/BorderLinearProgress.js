import withStyles from "@material-ui/core/es/styles/withStyles";
import {lighten} from "@material-ui/core/es/styles/colorManipulator";
import {LinearProgress} from "@material-ui/core";

export const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        width: "90%",
        backgroundColor: lighten('#FFFFFF', 0.5),
        border: '1px solid #707070',
        'padding-right': '1rem',
        'margin-top': '20px',
        'margin-bottom': '5px',
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#74bf89',
    },
})(LinearProgress);