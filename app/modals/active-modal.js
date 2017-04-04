import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import {modalTypes} from 'app/constants';
import {actions} from 'app/store/store';

import PopupDialog, {SlideAnimation, DialogTitle, DialogButton} from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  modal: {
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

  _getActiveModal(modalType) {
    switch (modalType) {
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
    const {modalType, hideModal} = this.props;
    const modal = this.props.modal || {};
    const {title, actionText, dismissable} = modal;

    return (
      <PopupDialog
        show={!!modalType}
        dismissOnTouchOutside={dismissable}
        dismissOnHardwareBackPress={dismissable}
        onDismissed={hideModal}
        dialogAnimation={this._slideAnimation}
        dialogStyle={styles.modal}
        dialogTitle={<DialogTitle title={title} />}
        actions={<DialogButton key='ok' text={actionText || 'OK'} onPress={hideModal}/>}
      >
        {this._getActiveModal(modalType)}
      </PopupDialog>
    );
  }
}

const stateToProps = (state) => ({
  modalType: state.modal.activeModal,
  modal: state.modal.modal,
})

const actionsToProps = () => ({
  hideModal: actions.modal.hideModal,
})

export default connect(stateToProps, actionsToProps)(ActiveModal);
