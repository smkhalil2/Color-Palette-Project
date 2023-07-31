import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal',
        
    },
    secondary: {
        backgroundColor: 'pink',
        "& h1": {
            color: 'white',
            "& span": {
                backgroundColor: 'yellow'
            }
        },
    }
};


function MiniPalette(props) {
    const { classes } = props;
    console.log(classes); 
    return (
        <div className={classes.main}>
            <h1>MiniPalette</h1>
            <section className={classes.secondary}><span>tewo</span><h1><span>ad</span>Soasjdasd</h1></section>
        </div>
    )
}

export default withStyles(styles)(MiniPalette); 