import { combineReducers, createStore} from 'redux';
import reducerMatches from './reducerMatches';
import { reducer as reducerForm} from 'redux-form';

let renders = combineReducers({
    matchesPage: reducerMatches,
    form: reducerForm
});

let store = createStore(renders);

window.store = store;

export default store;