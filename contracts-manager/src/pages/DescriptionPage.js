import React from 'react';
import ContractsPanel from '../components/ContractsPanel'
import { connect } from 'react-redux'


const DescriptionPage = ({ contracts }) => {
    const [expanded, setExpanded] = React.useState(false);

    const renderPanels = (contracts) => contracts.map((panel, index) => (
        <ContractsPanel
            key={index} {...panel}
            expanded={expanded}
            setExpanded={(expanded) => setExpanded(expanded)}
        />
    ))

    return (
        <div>
            {renderPanels(contracts)}
        </div>
    );
}

const mapStateToProps = ({ contracts }) => ({ contracts })

export default connect(mapStateToProps)(DescriptionPage)