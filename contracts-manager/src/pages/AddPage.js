import React from 'react'
import ContractForm from '../components/ContractForm'
import { bindActionCreators } from 'redux'
import * as contractsActions from '../actions/contractsActions'
import { connect } from 'react-redux'


const AddPage = ({ createContract }) => {
    return (
        <ContractForm onSubmit={createContract} />
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(contractsActions, dispatch)

export default connect(null, mapDispatchToProps)(AddPage)