import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { DefaultPage, FormModal } from '../shared/components';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import BoardCard from './BoardCard';
import BoardForm from './BoardForm';

const Boards = (props) => {

    const [showFormBoard, setShowFormBoard] = useState(false);

    const {} = props;
    const classes = useStyles(props);

    const location = useLocation();
    const history = useHistory();
  
    console.log('location :>> ', location);
    console.log('history :>> ', history);

    const renderButton = () =>{
        return(
            <Button 
                onClick={() => setShowFormBoard(true)}
                variant="contained"
                color="default"
                endIcon={<AddIcon/>}
            >
                ADD BOARD        
            </Button>
        );
    }

    const handleSave = () =>{
        alert('handleSave'); //Salvar board
        setShowFormBoard(false);
    }

    const handleCancel = () =>{
        setShowFormBoard(false);
    }

    return (
        <DefaultPage title="Boards" contentHeader={renderButton()}>
            <div className={classes.container}>
                <div className={classes.boardsContainer}>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                    <BoardCard/>
                </div>
            </div>
            <FormModal 
                formTitle="New Board" 
                formContent={<BoardForm/>} 
                handleCancel={handleCancel} 
                handleSave={handleSave}
                open={showFormBoard}
            />
        </DefaultPage>
    );
};

Boards.propTypes = {};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: 16,
        overflow: 'auto',
        maxHeight: 'calc(100vh - 180px)',
      },
      boardsContainer: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        padding: '16px 0',
        justifyItems: 'center',
        rowGap: 16,
      },
});

export default Boards;