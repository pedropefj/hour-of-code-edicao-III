import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from  '@material-ui/core';
import Input from './Input';
import WidthWindow from './WidthWindow';


const FormWithHooks = (props) => {
    const classes = useStyles(props);

    const [name, setName] = useState("Pedro");
    const [surname, setSurname] = useState("");
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        document.title = name;
    },[name]);

    const handleResizeWidth = () => setWidth(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', handleResizeWidth); 

        return(() =>{
            window.removeEventListener('resize', handleResizeWidth);
        });
    },[width]);


    return (
        <Card>
            <CardHeader title="FormWithHooks"/>
            <CardContent> 
                <Input label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <Input label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <WidthWindow width={width} />

            </CardContent>
        </Card>
    );
};

FormWithHooks.propTypes = {};

const useStyles = makeStyles({});

export default FormWithHooks;