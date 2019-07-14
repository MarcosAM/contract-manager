import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import * as contractsActions from '../actions/contractsActions'
import ContractsPanel from '../components/ContractsPanel'
import { connect } from 'react-redux'


const DescriptionPage = ({ contracts, loadContracts }) => {
    const [expanded, setExpanded] = React.useState(false);

    const renderPanels = (contracts) => contracts.map((panel, index) => (
        <ContractsPanel
            key={index} {...panel}
            expanded={expanded}
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

const mapDispatchToProps = dispatch => (bindActionCreators(contractsActions, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage)