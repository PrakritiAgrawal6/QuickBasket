import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';
import { thunk } from 'redux-thunk';

const configStore = () => {
return createStore(rootReducer, applyMiddleware(thunk))
}
export default configStore;