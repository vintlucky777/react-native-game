import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {images} from 'assets/images';

const styles = StyleSheet.create({
  wrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#746E5D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default class RoundImage extends React.Component {
  static defaultProps = {
    image: images.icons.success,
    onPress: () => {},
    onLongPress: () => {},
  };

  render() {
    const {
      image,
      size,
      borderSize,
      style,
      imageStyle,
      clickable,
      onPress,
      onLongPress,
      ...otherProps,
    } = this.props;

    const img = (
      <Image
        source={image}
        style={[styles.image, imageStyle]}
        resizeMode='cover'
      />
    );

    if (clickable) {
      return (
        <TouchableHighlight
          style={[styles.wrapper, style]}
          onPress={onPress}
          onLongPress={onLongPress}
          {...otherProps}
        >
          {img}
        </TouchableHighlight>
      );
    }

    return (
      <View style={[styles.wrapper, style]}>
        {img}
      </View>
    );
  }
}
