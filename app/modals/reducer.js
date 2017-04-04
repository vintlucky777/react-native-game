import {actionTypes} from './actions';

export const defaultState = {
  showModal: null,
  activeModal: null,
  modal: null,
};

export const modalReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        activeModal: payload.modalType,
        modal: payload.modal,
      }

    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
}
