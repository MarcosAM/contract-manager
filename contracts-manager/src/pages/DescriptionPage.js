import React from 'react';
import ContractsPanel from '../components/ContractsPanel'
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