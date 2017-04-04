import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {questImage} from 'assets/images'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 300,
    backgroundColor: '#413C3C',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  textWrp: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  text: {
    marginLeft: 24,
    marginRight: 24,
    color: 'black',
    fontSize: 24,
    color: '#222',
  },
});

export default class QuestInfoModal extends React.Component {
  render() {
    const {modal} = this.props;
    const {quest: {icon, description}} = modal;

    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={questImage(icon)}
          resizeMode='cover'
        />
        <View style={styles.textWrp}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    );
  }
}
