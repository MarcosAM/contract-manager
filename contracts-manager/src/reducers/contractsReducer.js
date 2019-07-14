import * as types from '../actions/actionTypes'


export default (state = [], action) => {
    switch (action.type) {
        case types.CONTRACTS_LOAD_SUCCESS:
            return [...action.contracts]
        default:
            return state;
    }
};