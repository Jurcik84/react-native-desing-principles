import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import func_FetchinDataReducer from './reducers/root-reducer';


export default createStore(
    func_FetchinDataReducer,
    {},
    applyMiddleware(thunk)
)
