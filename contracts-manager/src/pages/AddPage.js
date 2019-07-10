import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

export default () => {
    const classes = useStyles()

    return (
        <form className={classes.container} noValidate autoComplete='off'>
            <TextField
                label='Nome do Cliente'
                className={classes.textField}
                margin='normal'
                variant='outlined'
            />
            <TextField
                label='CPF'
                className={classes.textField}
                margin='normal'
                variant='outlined'
            />
            <TextField
                label='Descrição do Pedido'
                multiline
                className={classes.textField}
                margin='normal'
                variant='outlined'
            />
            <Button variant="contained" color="primary" className={classes.button}>
                Primary
            </Button>
        </form>
    );
}


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    }
}));