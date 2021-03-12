import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles'
import FormNoHooks from './FormNoHooks';
import FormWithHooks from './FormWithHooks';

const AulaVHooks = (props) => {

    const classes = useStyles(props);

    return (
        <div className={classes.container}>
            <FormWithHooks/>
            <FormNoHooks/>
        </div>
    );  

};

AulaVHooks.propTypes = {};

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        width: '100%',
        justifyContent: 'space-between',
    },
});

export default AulaVHooks;