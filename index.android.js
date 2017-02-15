/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton.react-native'
export default class ReactNotes extends Component {
  render() {
    return (
        <View style={styles.container}>
          <SimpleButton/>
        </View>

    );
  }
}

// styling
const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
