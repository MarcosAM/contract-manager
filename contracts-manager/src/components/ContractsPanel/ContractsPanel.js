import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getColorByState } from '../../constants/contractsStates'
import Button from '@material-ui/core/Button'
import FastForward from '@material-ui/icons/FastForward'
import Close from '@material-ui/icons/Close'


export default ({ id, expanded, setExpanded, title, details, state, onForward, onDelete }) => {
    const { summary, heading, white, button } = useStyles({ summaryColor: getColorByState(state) });

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
            <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
                <Typography>
                    {details}
                </Typography>
                <br />
                <Button variant='contained' color='primary' className={button} onClick={onForward}>
                    <FastForward />
                </Button>
                <Button variant='contained' color='secondary' className={button} onClick={onDelete} >
                    <Close />
                </Button>
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
    },
    button: {
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    }
}));