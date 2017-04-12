import {action} from 'app/store/utils';
import {modalTypes} from 'app/constants';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export const actionTypes = {
  SHOW_MODAL,
  HIDE_MODAL,
};

export const hideModal = () => action(HIDE_MODAL);
export const showModal = ({modalType, modalData}) => action(SHOW_MODAL, {modalType, modalData});
export const showLevelUpModal = (prevPlayer, updatedPlayer) => showModal({
  modalType: modalTypes.LEVEL_UP,
  modalData: {
    title: 'Level up!',
    actionText: 'Sweet!',
    dismissable: false,
    prevPlayer,
    updatedPlayer,
  },
});
export const showLevelDegradeModal = (prevPlayer, updatedPlayer) => showModal({
  modalType: modalTypes.LEVEL_DEGRADE,
  modalData: {
    title: 'Level lost!',
    actionText: 'So bad...',
    dismissable: false,
    prevPlayer,
    updatedPlayer,
  },
});
export const showQuestInfoModal = (quest) => showModal({
  modalType: modalTypes.QUEST_INFO,
  modalData: {
    quest: quest,
    title: quest.title,
    actionText: 'Got it',
    dismissable: true,
  },
});
export const showQuestSuccessModal = (quest) => showModal({
  modalType: modalTypes.QUEST_VICTORY,
  modalData: {
    quest: quest,
    title: quest.title,
    actionText: 'Nice!',
    dismissable: false,
  },
});
export const showQuestFailureModal = (quest) => showModal({
  modalType: modalTypes.QUEST_DEFEAT,
  modalData: {
    quest: quest,
    title: quest.title,
    actionText: 'Oh...',
    dismissable: false,
  },
});
export const showPlayerEditModal = (player) => showModal({
  modalType: modalTypes.PLAYER_EDIT,
  modalData: {
    player: player,
    title: 'Edit player',
    actionText: 'Done',
    dismissable: false,
  },
});
