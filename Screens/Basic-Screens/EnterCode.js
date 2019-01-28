import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

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
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
            alignItems: 'center'
          }}
        >
          <Text style={styles.text}>You Found the BOMB!</Text>
        </View>
        <View
          style={{ flex: 2, backgroundColor: 'skyblue', alignItems: 'center' }}
        >
          <Text style={styles.text}>
            The deactivation code was given by the second spy
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'powderblue',
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              backgroundColor: 'purple',
              flex: 1,
              borderColor: 'white',
              borderWidth: 2
            }}
          >
            <TextInput style={{ height: '100%' }} placeholder="0" />
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              flex: 1,
              borderColor: 'white',
              borderWidth: 2
            }}
          >
            <TextInput style={{ height: '100%' }} placeholder="0" />
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              flex: 1,
              borderColor: 'white',
              borderWidth: 2
            }}
          >
            <TextInput style={{ height: '100%' }} placeholder="0" />
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              flex: 1,
              borderColor: 'white',
              borderWidth: 2
            }}
          >
            <TextInput style={{ height: '100%' }} placeholder="0" />
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              flex: 1,
              borderColor: 'white',
              borderWidth: 2
            }}
          >
            <TextInput style={{ height: '100%' }} placeholder="0" />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'skyblue',
            alignItems: 'center'
          }}
        >
          <Button title="Submit Code" onPress={() => {}} />
        </View>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Button title="exit" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  }
});
