import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit'>
                        Title that will change eventually
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});