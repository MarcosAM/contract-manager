import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default ({ id, expanded, setExpanded, title, details }) => {
    const classes = useStyles();

    const handleChange = panel => (event, isExpanded) => {
        console.log(setExpanded)
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography className={classes.heading}>{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {details}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));