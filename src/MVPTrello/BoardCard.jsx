import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router';
import uniqid from 'uniqid';


const BoardCard = (props) => {
    const {} = props;
    const classes = useStyles(props);
    const history = useHistory();
    const {} = classes;

    return (
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Typography variante="h5" component='h2'>
                        Title card
                    </Typography>
                    <Typography color='textSecondary' gutterBottom>
                        Description
                    </Typography>
                    <CardActions>
                        <Button size='small' onClick={() => history.push(`/board/${uniqid()}`)}>
                            Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
    );
};

BoardCard.propTypes = {};

const useStyles = makeStyles({
    cardContainer: {
      width: 'calc(100% - 16px)',
    },
  });

export default BoardCard;