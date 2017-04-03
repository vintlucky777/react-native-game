import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

import {modalTypes} from 'app/constants';
import {actions} from 'app/store/store';

import PopupDialog, {SlideAnimation, DialogTitle, DialogButton} from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  emptyScreenText: {
    color: 'white',
    fontSize: 30,
  },
})

class ActiveModal extends React.Component {
  _getActiveModal() {
    switch (this.props.modalType) {
      default:
        return (
          <View style={styles.emptyScreen}>
            <Text style={styles.emptyScreenText}>
              Modal not defined!
            </Text>
          </View>
        );
    }
  }

  render() {
    // const {title} = this.props.modal;
    return (
      <PopupDialog
        show={!!this.props.modalType}
        animationDuration={400}
        dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
        dialogTitle={<DialogTitle title="Quest complete" />}
        actions={<DialogButton key='YAY' text='YAY' onPress={this.props.hideModal}/>}
      >
        {this._getActiveModal()}
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
