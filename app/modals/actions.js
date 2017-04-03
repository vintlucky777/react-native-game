import {action} from 'app/store/utils';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const actionTypes = {
  SHOW_MODAL,
  HIDE_MODAL,
};

export const showModal = (modalType, modal) => action(SHOW_MODAL, {modalType, modal});
export const hideModal = () => action(HIDE_MODAL);
