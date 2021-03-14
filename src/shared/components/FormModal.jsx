import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core';


const FormModal = (props) => {

    const { formTitle, formContent, handleCancel, handleSave, open } = props;
    const classes = useStyles(props);

    return (
        <Dialog open={open} style={{padding: 24}}>
            <DialogTitle>{formTitle}</DialogTitle>
            <DialogContent>
                {formContent}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="default">
                Cancel
                </Button>
                <Button onClick={handleSave} color="secondary" variant="contained">
                Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

FormModal.propTypes = {
    formTitle: PropTypes.string,
    formContent: PropTypes.node,
    handleCancel: PropTypes.func,
    handleSave: PropTypes.func,
    open: PropTypes.bool,
  };


 const useStyles = makeStyles({});

export default FormModal;