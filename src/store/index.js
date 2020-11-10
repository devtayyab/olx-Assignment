import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import combineReducers from './reducer/combine reducer'

const Store= createStore(combineReducers,applyMiddleware(thunk))



export default Store
