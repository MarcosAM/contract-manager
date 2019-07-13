import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

export default ({ primary, secondary }) => {

    const { listItem } = useStyles()

    return (
        <ListItem className={listItem}>
            <Typography>{primary}</Typography>
            <Typography>{secondary}</Typography>
        </ListItem>
    )
}

const useStyles = makeStyles(theme => ({
    listItem: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
}));