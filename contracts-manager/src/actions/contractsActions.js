import * as types from './actionTypes'
import axios from 'axios'

const URL = 'http://localhost:3004/contracts'

export const loadContracts = () => {
    return dispatch => {
        axios.get(URL)
            .then(contracts => {
                dispatch(loadContractsSuccess(contracts.data))
            })
    }
}

export const loadContractsSuccess = (contracts) => {
    return { type: types.CONTRACTS_LOAD_SUCCESS, contracts }
}