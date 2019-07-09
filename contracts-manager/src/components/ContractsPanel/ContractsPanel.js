import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getColorByState } from '../../constants/contractsStates'


export default ({ id, expanded, setExpanded, title, details, state }) => {
    const { summary, heading, white } = useStyles({ summaryColor: getColorByState(state) });

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <ExpansionPanel expanded={expanded === id} onChange={handleChange(id)}>
            <ExpansionPanelSummary className={summary}
                expandIcon={<ExpandMoreIcon className={white} />}
            >
                <Typography className={heading}>{title}</Typography>
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
    summary: {
        backgroundColor: props => props.summaryColor,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: 'white'
    },
    white: {
        color: 'white'
    }
}));