/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton.react-native'
export default class ReactNotes extends Component {

    constructor(){
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene(route,navigator){
        switch(route.name){
            case 'home':
                return(
                    <View style={styles.container}>
                        <SimpleButton onPress={()=> console.log('Pressed')}
                                      customText='Create Note'
                        />
                    </View>
                );
            case 'createNote':
        }

    }

  render() {
    return (
        <Navigator initialRoute={{name:'home'}}
                   renderScene={this.renderScene}
        />
    )
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
