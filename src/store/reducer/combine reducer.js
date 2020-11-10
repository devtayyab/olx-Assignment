import {combineReducers} from 'redux';
import reducer from './index'
import itemreducer from './loadmore'

export default combineReducers({
    mobile : reducer,
    allitems : itemreducer

})