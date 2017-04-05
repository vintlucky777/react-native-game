import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import {modalTypes} from 'app/constants';
import PlayerEditModal from 'app/modals/player-edit';
import LevelUpModal from 'app/modals/level-up';
import QuestInfoModal from 'app/modals/quest-info';
import QuestVictoryModal from 'app/modals/quest-victory';
import QuestDefeatModal from 'app/modals/quest-defeat';
import {actions} from 'app/store/store';

import PopupDialog, {SlideAnimation, DialogTitle, DialogButton} from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  emptyModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4332A',
  },
  emptyModalText: {
    color: 'white',
    fontSize: 30,
  },
})

class ActiveModal extends React.Component {
  _slideAnimation = new SlideAnimation({slideFrom: 'bottom'});

  _getModalContent(modalType) {
    const {modal} = this.props;

    switch (modalType) {
      case modalTypes.PLAYER_EDIT:
        return <PlayerEditModal modal={modal}/>
      case modalTypes.LEVEL_UP:
        return <LevelUpModal modal={modal}/>
      case modalTypes.QUEST_INFO:
        return <QuestInfoModal modal={modal}/>
      case modalTypes.QUEST_VICTORY:
        return <QuestVictoryModal modal={modal}/>
      case modalTypes.QUEST_DEFEAT:
        return <QuestDefeatModal modal={modal}/>
      default:
        return (
          <View style={styles.emptyModal}>
            <Text style={styles.emptyModalText}>
              Modal not defined!
            </Text>
          </View>
        );
    }
  }

  render() {
    const {showModal, modalType, hideModal} = this.props;
    const modal = this.props.modal || {};
    const {title, actionText, dismissable} = modal;

    return (
      <PopupDialog
        show={showModal}
        dismissOnTouchOutside={dismissable}
        dismissOnHardwareBackPress={dismissable}
        onDismissed={hideModal}
        dialogAnimation={this._slideAnimation}
        dialogTitle={<DialogTitle title={title} />}
        actions={<DialogButton key='ok' text={actionText || 'OK'} onPress={hideModal}/>}
      >
        <View style={styles.modal}>
          {this._getModalContent(modalType)}
        </View>
      </PopupDialog>
    );
  }
}

const stateToProps = (state) => ({
  showModal: state.modal.showModal,
  modalType: state.modal.activeModal,
  modal: state.modal.modal,
})

const actionsToProps = () => ({
  hideModal: actions.modal.hideModal,
})

export default connect(stateToProps, actionsToProps)(ActiveModal);
