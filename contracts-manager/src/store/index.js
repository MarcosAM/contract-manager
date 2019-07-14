import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../reducers';
import thunk from 'redux-thunk'


export default createStore(Reducers, compose(applyMiddleware(thunk)));