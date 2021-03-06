import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {images} from 'assets/images';

const styles = StyleSheet.create({
  wrapper: {
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
    size: 60,
    borderSize: 2,
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
    const totalSize = 2 * borderSize + size;

    const img = (
      <Image
        source={image}
        style={[styles.image, imageStyle, {
          width: size,
          height: size,
          borderRadius: size / 2,
        }]}
        resizeMode='cover'
      />
    );

    if (clickable) {
      return (
        <TouchableHighlight
          style={[styles.wrapper, style, {
            width: totalSize,
            height: totalSize,
            borderRadius: totalSize / 2,
            borderWidth: borderSize,
          }]}
          onPress={onPress}
          onLongPress={onLongPress}
          {...otherProps}
        >
          {img}
        </TouchableHighlight>
      );
    }

    return (
      <View style={[styles.wrapper, style, {
        width: totalSize,
        height: totalSize,
        borderRadius: totalSize / 2,
        borderWidth: borderSize,
      }]}>
        {img}
      </View>
    );
  }
}
