import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Win = (props) => {
  return (
    <ScrollView>
      <View nativeID="winContainer" style={styles.winContainer}>
        <View nativeID="headerContainer" style={styles.headerContainer}>
          <Text style={styles.headerContent}>You de-fused the bomb!!!</Text>
        </View>

        <View nativeID="bodyContainer" style={styles.bodyContainer}>
          <Image
            source={require('../../Assets/trophy.jpeg')}
            style={styles.winImage}
          />
          {/* <View style={styles.markButtonContainer}>
            <Button
              color="black"
              style={styles.markButton}
              title="New Game"
              onPress={props.onPress} />
          </View> */}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  winContainer: {
    display: 'flex',
    backgroundColor: 'green',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 50,
  },
  headerContainer: {
    backgroundColor: 'yellow',
    width: '100%',
    // border: '1px solid black',
  },
  header: {
    fontSize: 30,
    color: 'black',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  winImage: {
    marginBottom: 30,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  start: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
});

export default Win
