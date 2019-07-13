import contractsReducer from './contractsReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    contracts: contractsReducer,
});