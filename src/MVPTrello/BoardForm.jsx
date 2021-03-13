import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const BoardForm = (props) => {
    const {} = props;
    const classes = useStyles(props);

    return (
        <>
            <TextField
                autoFocus
                margin="dense"
                id="boardName"
                label="Board Name"
                type="text"
                fullWidth
                required    
            />

            <TextField
                autoFocus
                margin="dense"
                id="boardDescription"
                label="Board Description"
                type="text"
                multiline
                rows={4}
                fullWidth
            />
        </>
    );
};

BoardForm.propTypes = {};

const useStyles = makeStyles({});

export default BoardForm;