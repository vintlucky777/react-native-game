import React from 'react';
import _ from 'lodash';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNSwiper from 'app/third-party/swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: null,
  },
});

export default class Swiper extends React.Component {
  static defaultProps = {
    items: [],
    initialPage: 0,
    locked: false,
    onChangePage: () => {},
  };

  constructor(props) {
    super(props);

    this._renderPage = this._renderPage.bind(this);
  }

  _renderPage(data, pageID) {
    const {itemStyle} = this.props;

    return (
      <View key={pageID} style={itemStyle || styles.item}>
        {data}
      </View>
    );
  }

  render() {
    const {style, pageStyle, items, initialPage, onChangePage, locked} = this.props;

    return (
      <RNSwiper
        bounces={true}
        loop={false}
        showsPagination={false}
        scrollEnabled={!locked}
        index={initialPage}
        onMomentumScrollEnd={(e, state) => onChangePage(state.index)}
        style={[styles.container, style]}
        pageStyle={[styles.item, pageStyle]}
      >
        {items.map(this._renderPage)}
      </RNSwiper>
    );
  }
}
