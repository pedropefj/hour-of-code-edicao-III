import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography } from '@material-ui/core';

const TaskCard = (props) => {
  const { task, index } = props;
  const classes = useStyles();

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provider, snapshot) => {
        return (
          <Card
            variant="outlined"
            ref={provider.innerRef}
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            className={`${classes.taskContainer} ${
              snapshot.isDragging ? classes.taskDragging : ''
            }`}
          >
            <Typography variant="p">{task.description}</Typography>

            {provider.placeholder}
          </Card>
        );
      }}
    </Draggable>
  );
};

TaskCard.propTypes = {};

const useStyles = makeStyles({
  taskContainer: {
    userSelect: 'none',
    padding: 16,
    minHeight: '46px',
    fontSize: 14,
    marginBottom: 16,
  },
  taskDragging: {
    opacity: 0.8,
  },
});

export default TaskCard;