import React from 'react';
import _ from 'lodash';
import {View, StyleSheet, ViewPagerAndroid, Platform} from 'react-native';
import ViewPagerIOS from 'react-native-viewpager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
});

export default class ViewPager extends React.Component {
  static defaultProps = {
    items: [],
    initialPage: 0,
    locked: false,
    onChangePage: () => {},
  };

  _dataSource = new ViewPagerIOS.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2,
  });

  constructor(props) {
    super(props);

    const {items} = this.props;

    this.state = {
      dataSource: this._dataSource.cloneWithPages(items),
    };

    this._renderPage = this._renderPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.items, this.props.items)) {
      this.setState({
        dataSource: this._dataSource.cloneWithPages(nextProps.items),
      });
    }
  }

  _renderPage(data, pageID) {
    const {itemStyle} = this.props;

    return (
      <View key={pageID} style={itemStyle || styles.item}>
        {data}
      </View>
    );
  }

  renderIOS() {
    const {style, initialPage, onChangePage, locked} = this.props;

    return (
      <ViewPagerIOS
        isLoop={false}
        autoplay={false}
        renderPageIndicator={false}
        initialPage={initialPage}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={onChangePage}
        locked={locked}
        onChangePage={onChangePage}
        style={[styles.container, style]}
      />
    );
  }

  renderAndroid() {
    const {style, initialPage, items, onChangePage, locked} = this.props;
    const pages = _.map(items, this._renderPage);

    return (
      <ViewPagerAndroid
        style={[styles.container, style]}
        initialPage={initialPage}
        onPageSelected={ev => onChangePage(ev.nativeEvent.position)}
        scrollEnabled={!locked}
      >
        {pages}
      </ViewPagerAndroid>
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS();
    } else {
      return this.renderAndroid();
    }
  }
}
