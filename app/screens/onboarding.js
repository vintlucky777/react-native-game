import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {actions} from 'app/store/store';
import _ from 'lodash';

import Button from 'app/common/button';
import Swiper from 'app/common/swiper';
import {Col} from 'app/common/layout';
import {getPlayerClassImage, alert} from 'app/utils';

import {images} from 'assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  onboardingPage: {
    flex: 1,
  },
  imageCnt: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  footer: {
    marginBottom: 38,
    width: 204,
  },
  startButton: {
    borderWidth: 2,
    borderColor: '#3467A3',
    backgroundColor: '#3474BF',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
  },
});

class OnboardingScreen extends Component {
  constructor(props) {
    super(props);

    this._handleOnboardingComplete = this._handleOnboardingComplete.bind(this);
  }

  state = {imagesCount: images.onboarding.length};

  _handleOnboardingComplete() {
    this.props.completeOnboarding();
    this.props.showQuestsScreen();
  }

  renderPage(page) {
    const imgs = _.values(images.onboarding);
    const imgsCount = imgs.length;

    return (
      <Col flex={1} align='center' key={page}>
        <View style={styles.imageCnt}>
          <Image
            style={styles.image}
            source={imgs[page]}
            resizeMode='contain'
          />
        </View>
        <Col flex={1}/>
        <Col flex={0} style={styles.footer}>
          {page === imgsCount - 1
            ? <Button
                style={styles.startButton}
                textStyle={styles.startButtonText}
                onPress={this._handleOnboardingComplete}
              >
                LET'S PLAY
              </Button>
            : null
          }
        </Col>
      </Col>
    );
  }

  render() {
    const imgs = _.values(images.onboarding);
    const onboardingPages = _.map(imgs, (v, i) => this.renderPage(i));

    return (
      <View style={styles.container}>
        <Swiper
          items={onboardingPages}
          bounces={false}
          showsPagination={true}
          itemStyle={styles.onboardingPage}
          onChangePage={this._handleOnboardingSwipe}
        />
      </View>
    );
  }
}

const stateToProps = () => ({});

const actionsToProps = () => ({
  completeOnboarding: actions.player.completeOnboarding,
  showQuestsScreen: actions.screens.showQuestsScreen,
})

export default connect(stateToProps, actionsToProps)(OnboardingScreen);
