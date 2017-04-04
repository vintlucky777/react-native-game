import {actionTypes} from './actions';

export const defaultState = {
  activeModal: null,
  modal: null,
};

export const modalReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        activeModal: payload.modalType,
        modal: payload.modal,
      }

    case actionTypes.HIDE_MODAL:
      return defaultState;

    default:
      return state;
  }
}
