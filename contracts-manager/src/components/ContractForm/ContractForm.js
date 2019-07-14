import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { reduxForm, Field } from 'redux-form'

const renderTextField = ({
    input,
    label,
    ...custom
}) =>
    <TextField
        label={label}
        {...input}
        {...custom}
    />

const AddPage = ({ handleSubmit }) => {
    const classes = useStyles()

    const fieldProps = {
        component: renderTextField,
        className: classes.textField,
        margin: 'normal',
        variant: 'outlined'
    }

    return (
        <form className={classes.container} onSubmit={handleSubmit}>
            <Field
                name='title'
                label='Nome do Cliente'
                {...fieldProps}
            />
            <Field
                name='cpf'
                label='CPF'
                {...fieldProps}
            />
            <Field
                name='details'
                label='Descrição do Pedido'
                multiline
                {...fieldProps}
            />
            <Button type='submit' variant="contained" color="primary" className={classes.button}>
                Primary
            </Button>
        </form>
    );
}

export default reduxForm({ form: 'contractForm' })(AddPage)

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