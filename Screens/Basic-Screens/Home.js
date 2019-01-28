import React from 'react'
import { Text, View, Button, Alert } from 'react-native';
import {styles} from '../../styles'


export default class Home extends React.Component {
  onPressOnePlayer () {
    Alert.alert('You tapped the one-player button!')
  }
  onPressMultiPlayer () {
    Alert.alert('You tapped the multi-player button!')
  }
  onPressLoginSignup () {
    Alert.alert('You tapped the login/signup button!')
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.titleContainer}>
      <Text style = {styles.largeText}>  Game Title</Text> 
      </View>
      <View>
      <Button title="Start one-player game" onPress={this.onPressOnePlayer}/>
      <Button title="Start multi-player game" onPress={this.onPressMultiPlayer}/>
      <Button title="Login or sign up" onPress={this.onPressLoginSignup}/>
      </View>
      </View>
    );
  }
}