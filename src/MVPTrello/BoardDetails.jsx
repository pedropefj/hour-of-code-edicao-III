import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DefaultPage from '../shared/components/DefaultPage';
import {DragDropContext} from 'react-beautiful-dnd';
import BoardLane from './BoardLane';
import { lanesMock } from '../shared/mocks/lanes.mock';
import TaskCard from './TaskCard';
import { onDragEnd } from './util';

const BoardDetails = (props) => {
  const {} = props;
  const classes = useStyles(props);

  const [lanes, setLanes] = useState(lanesMock);

  const renderTask = (task, index) => {
    return <TaskCard task={task} index={index} />;
  };

  const renderLanes = () => {

    return Object.entries(lanes).map(([laneId, lane]) => {
      return (

          <BoardLane 
            key={laneId} 
            laneId={laneId} 
            lane={lane}
            laneTitle="Title"
            renderTask={renderTask}
          />
      );
    });
  };

  return(
    <DefaultPage title="Board details">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, lanes, setLanes)}>
        <div className={classes.container}>
          {renderLanes()}
        </div>
      </DragDropContext>
    </DefaultPage>
  );
};

BoardDetails.propTypes = {};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default BoardDetails;