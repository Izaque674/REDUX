import { createStore } from 'redux';
import rootReducer from '../demo/reducer';

const store = createStore(rootReducer);

export default store;