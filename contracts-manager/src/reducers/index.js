import { combineReducers } from 'redux'
import contractsReducer from './contractsReducer'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    contracts: contractsReducer,
    form: formReducer
});