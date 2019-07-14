import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import * as contractsActions from '../actions/contractsActions'
import ContractsPanel from '../components/ContractsPanel'
import { connect } from 'react-redux'


const DescriptionPage = ({ contracts, loadContracts, forwardContract, deleteContract }) => {
    const [expanded, setExpanded] = React.useState(false);

    const renderPanels = (contracts) => contracts.map((contract, index) => (
        <ContractsPanel
            key={index} {...contract}
            expanded={expanded}
            onForward={() => forwardContract(contract)}
            onDelete={() => deleteContract(contract)}
            setExpanded={(expanded) => setExpanded(expanded)}
        />
    ))

    useEffect(() => loadContracts(), [])

    return (
        <div>
            {renderPanels(contracts)}
        </div>
    );
}

const mapStateToProps = ({ contracts }) => ({ contracts })

const mapDispatchToProps = dispatch => bindActionCreators(contractsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage)