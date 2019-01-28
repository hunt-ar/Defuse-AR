/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';
import Home from './Screens/Basic-Screens/Home'
import StoryConcept from './Screens/Basic-Screens/StoryConcept'
import Win from './Screens/Basic-Screens/Win'

var sharedProps = {
  apiKey: 'C241B72B-6767-4B75-B539-497EDE918432',
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: sharedProps
    }
  }

  render() {
    return (
    <StoryConcept />
    );
  }
}

module.exports = App;
