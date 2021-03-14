import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/styles';
import TaskList from './TaskList';

const BoardLane = (props) => {

    const {laneId, lane, renderTask} = props;
    const classes = useStyles(props);

    return (
        <Paper className={classes.lanesContainer}>
            <header className={classes.header}>
                <Typography variante="h5">
                    Titulo
                </Typography>
            </header>
            <Droppable key={laneId} droppableId={laneId}>
                {
                    (provider, snapshot) => 
                    <TaskList
                        lane={lane}
                        renderTask={renderTask}
                        droppableProps={{ snapshot, provider }}
                        />
                }
            </Droppable>
        </Paper>
    );
};

BoardLane.propTypes = {
    laneId: PropTypes.string,
    lane: PropTypes.object
};

const useStyles = makeStyles({
    lanesContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignTasks: 'center',
      marginRight: 16,
      maxHeight: 'calc(100% - 100px)'
    },
    laneHeader:{

    },
  });

export default BoardLane;