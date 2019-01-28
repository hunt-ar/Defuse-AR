import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class EnterCode extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        />
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
      </View>
    );
  }
}
