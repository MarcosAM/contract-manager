import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import * as contractsActions from '../actions/contractsActions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import CustomList from '../components/CustomList'
import { STATES_WITHOUT_DELETE } from '../constants/contractsStates'


const ListPage = ({ contracts, loadContracts }) => {
    const { root } = useStyles();

    const convertContractsToListItems = (contracts) => (
        STATES_WITHOUT_DELETE.map(state => ({
            primary: state,
            secondary: contracts.reduce((acc, curr) => (curr.state === state ? ++acc : acc), 0)
        }))
    )

    useEffect(() => loadContracts(), [])

    return (
        <div className={root}>
            <CustomList items={convertContractsToListItems(contracts)} />
        </div>
    );
}

const mapStateToProps = ({ contracts }) => ({ contracts })

const mapDispatchToProps = dispatch => (bindActionCreators(contractsActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
}));