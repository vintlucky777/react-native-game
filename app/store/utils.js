import {store} from './store';

export const action = (type, payload) => store.dispatch({type, payload});

export const loggerMiddleware = store => next => action => {
  const prevState = store.getState();
  next(action);
  const nextState = store.getState();
  console.groupCollapsed(action.type);
    console.log('Prev state', prevState);
    console.log('Action', action)
    console.log('Next state', nextState);
  console.groupEnd();
}
