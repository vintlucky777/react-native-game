import {actionTypes} from './actions';

export const defaultState = {
  showModal: null,
  activeModal: null,
  modalData: null,
  pendingModals: [],
};

export const modalReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case actionTypes.SHOW_MODAL:
      if (!state.showModal) {
        return {
          ...state,
          showModal: true,
          activeModal: payload.modalType,
          modalData: payload.modalData,
        }
      }

      return {
        ...state,
        pendingModals: [...state.pendingModals, {modalType: payload.modalType, modalData: payload.modalData}],
      }

    case actionTypes.HIDE_MODAL:
      if (state.pendingModals.length > 0) {
        const [nextModal, ...otherModals] = state.pendingModals;
        return {
          ...state,
          activeModal: nextModal.modalType,
          modalData: nextModal.modalData,
          pendingModals: otherModals,
        };
      }
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
}
