import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const TaskList = (props) => {

    const {lane, renderTask, droppableProps} = props;
    const { provider, snapshot } = droppableProps;
    const { isDraggingOver } = snapshot;
    const classes = useStyles({ isDraggingOver });


  return (
    <div className={classes.tasksContainer} {...provider.droppableProps} ref={provider.innerRef}>
        {
            lane.tasks.map((task, index) => renderTask(task, index))
        }
    </div>
  );
};

TaskList.propTypes = {};

const useStyles = makeStyles((theme) => {
  const variantTheme = theme.palette.type === 'light' ? '220, 228, 235' : '53, 53, 53';
  return {
    tasksContainer: ({ isDraggingOver }) => {
      const opacityTheme = isDraggingOver ? 0.9 : 0.2;
      const backgroundColor = `rgba(${variantTheme},${opacityTheme})`;
      return {
        backgroundColor,
        width: 200,
        height: '100%',
        overflow: 'auto',
        padding: 16,
      };
    },
  };
});

export default TaskList;