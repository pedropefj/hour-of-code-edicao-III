import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';

const FancyBoarder = (props) =>{
    const { color } = props;
    const classes = useStyles({ color });

    return <div className={classes.container}>{props.children}</div>;
}

FancyBoarder.prototype = {
    color: PropTypes.string,
};

FancyBoarder.defaultProps = {
    color: 'primary',
};

const useStyles = makeStyles({
    container: ({ color }) =>({
        borderRadius: 8,
        padding: 16,
        border: `2px solid ${paletteColors[color]}`,
    }),
});

export default FancyBoarder;