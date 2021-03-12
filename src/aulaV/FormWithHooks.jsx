import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from  '@material-ui/core';
import Input from './Input';
import WidthWindow from './WidthWindow';
import { useWidthResize } from './hooks/useWidthResize';
import { useInputForm } from './hooks/useInputForm';
import { useDocumentTitle } from './hooks/useDocumentTitle';


const FormWithHooks = (props) => {
    const classes = useStyles(props);
    const nameInput = useInputForm("Pedro");
    const surnameInput = useInputForm("");
    useDocumentTitle(nameInput.value);
    const width = useWidthResize();

    return (
        <Card>
            <CardHeader title="FormWithHooks"/>
            <CardContent> 
                <Input label="Name" {...nameInput}/>
                <Input label="Surname" value={surnameInput.value} onChange={surnameInput.onChange} />
                <WidthWindow width={width} />

            </CardContent>
        </Card>
    );
};

FormWithHooks.propTypes = {};

const useStyles = makeStyles({});

export default FormWithHooks;