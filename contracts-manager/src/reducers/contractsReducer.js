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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};