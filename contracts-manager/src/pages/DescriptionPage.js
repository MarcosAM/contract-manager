import React from 'react';
import ContractsPanel from '../components/ContractsPanel'

const INITIAL_STATE = [
    {
        id: '01',
        title: 'Cliente 01',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '02',
        title: 'Cliente 02',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '03',
        title: 'Cliente 03',
        details: 'Altas descrições de pedidos'
    },
    {
        id: '04',
        title: 'Cliente 04',
        details: 'Altas descrições de pedidos'
    },
]

export default function ControlledExpansionPanels() {
    const [expanded, setExpanded] = React.useState(false);

    const renderPanels = () => INITIAL_STATE.map((panel, index) => (
        <ContractsPanel
            key={index} {...panel}
            expanded={expanded}
            setExpanded={(expanded) => setExpanded(expanded)}
        />
    ))

    return (
        <div>
            {renderPanels()}
        </div>
    );
}