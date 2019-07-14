import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { convertPathToTitle } from '../../constants/navigation'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ history }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit'>
                        {history && history.location && convertPathToTitle(history.location.pathname)}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Header)

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});