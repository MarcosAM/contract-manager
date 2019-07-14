import * as types from './actionTypes'
import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import Chance from 'chance'
import { STATES, forwardState, Deleted } from '../constants/contractsStates'

const URL = 'http://localhost:3004/contracts/'

const chance = new Chance()

export const loadContracts = () => (
    dispatch => {
        axios.get(URL)
            .then(contracts => {
                dispatch(loadContractsSuccess(contracts.data))
            })
    }
)

export const loadContractsSuccess = contracts => ({
    type: types.CONTRACTS_LOAD_SUCCESS,
    contracts: contracts.reduce((acc, curr) => (curr.state === Deleted ? acc : [...acc, curr]), [])
})

export const createContract = contract => {
    const postableContract = { ...contract, id: chance.guid(), state: STATES[0] }

    return dispatch => {
        axios.post(URL, postableContract).then(() => {
            dispatch(resetForm('contractForm'))
            dispatch({ type: types.CONTRACTS_CREATE_SUCCESS })
        })
    }
}

export const forwardContract = contract => {
    const forwardedContract = { ...contract, state: forwardState(contract.state) }

    return dispatch => {
        axios.put(URL + forwardedContract.id, forwardedContract).then(() => {
            dispatch(loadContracts())
        })
    }
}

export const deleteContract = contract => {
    const deleteContract = { ...contract, state: Deleted }

    return dispatch => {
        axios.put(URL + deleteContract.id, deleteContract).then(() => {
            dispatch(loadContracts())
        })
    }
}