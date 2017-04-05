import {action} from 'app/store/utils';
import {modalTypes} from 'app/constants';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const actionTypes = {
  SHOW_MODAL,
  HIDE_MODAL,
};

export const hideModal = () => action(HIDE_MODAL);
export const showModal = (modalType, modal) => action(SHOW_MODAL, {modalType, modal});
export const showLevelUpModal = (prevPlayer, updatedPlayer) => action(SHOW_MODAL, {
  modalType: modalTypes.LEVEL_UP,
  modal: {
    title: 'Level up!',
    actionText: 'Sweet!',
    dismissable: false,
    prevPlayer,
    updatedPlayer,
  },
});
export const showQuestInfoModal = (quest) => action(SHOW_MODAL, {
  modalType: modalTypes.QUEST_INFO,
  modal: {
    quest: quest,
    title: quest.title,
    actionText: 'Got it',
    dismissable: true,
  },
});
export const showQuestSuccessModal = (quest) => action(SHOW_MODAL, {
  modalType: modalTypes.QUEST_VICTORY,
  modal: {
    quest: quest,
    title: quest.title,
    actionText: 'Nice!',
    dismissable: false,
  },
});
export const showQuestFailureModal = (quest) => action(SHOW_MODAL, {
  modalType: modalTypes.QUEST_DEFEAT,
  modal: {
    quest: quest,
    title: quest.title,
    actionText: 'Oh...',
    dismissable: false,
  },
});
export const showPlayerEditModal = (player) => action(SHOW_MODAL, {
  modalType: modalTypes.PLAYER_EDIT,
  modal: {
    player: player,
    title: 'Edit player',
    actionText: 'Done',
    dismissable: false,
  },
});
