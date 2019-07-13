import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CustomList from '../components/CustomList'
import { New, Preparing, Ready, Done } from '../constants/contractsStates'


const INITIAL_STATE = [
    {
        id: '01',
        state: New,
        title: 'Cliente 01',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '02',
        state: Preparing,
        title: 'Cliente 02',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '03',
        state: Ready,
        title: 'Cliente 03',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '04',
        state: Done,
        title: 'Cliente 04',
        details: 'Altas descrições de pedidos'
    },
]


export default function SimpleList() {
    const classes = useStyles();

    const convertContractsToListItems = (contracts) => (
        contracts.map(({ id, title }) => ({ primary: title, secondary: id }))
    )

    return (
        <div className={classes.root}>
            <CustomList items={convertContractsToListItems(INITIAL_STATE)} />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
}));