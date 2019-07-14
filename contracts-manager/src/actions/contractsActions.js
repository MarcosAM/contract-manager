import * as types from './actionTypes'
import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import Chance from 'chance'
import { New } from '../constants/contractsStates'

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

export const loadContractsSuccess = contracts => ({ type: types.CONTRACTS_LOAD_SUCCESS, contracts })

export const createContract = contract => {
    
    contract.id = chance.guid()
    contract.state = New

    return dispatch => {
        axios.post(URL, contract).then(() => {
            dispatch(resetForm('contractForm'))
            dispatch({ type: types.CONTRACTS_CREATE_SUCCESS })
        })
    }
}