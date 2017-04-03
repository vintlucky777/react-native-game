import {store} from './store';

export const action = (type, payload) => store.dispatch({type, payload});
