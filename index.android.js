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
import NoteScreen from './App/Components/NoteScreen.react-native'
import HomeScreen from './App/Components/HomeScreen.react-native'

//object for routeMapper prop
let NavigationBarRouteMapper ={
    LeftButton:(route,navigator,index,navState) => {
        switch (route.name) {
            case 'createNote':
                return (
                    <SimpleButton onPress={() => {
                            navigator.pop()
                        }}
                                  customText='Back'
                    />
                );
            default:
                return null;
        }
        
    },
    RightButton: (route,navigator,index,navState) => {
        switch (route.name) {
            case 'home':
                return (
                    <SimpleButton onPress={() => {
                            navigator.push({
                                name:'createNote'
                            })
                        }}
                                  customText='Create Note'
                    />
                );
            default:
                return null;
        }
    },
    Title: (route,navigator,index,navState) => {
        switch (route.name) {
            case 'home':
                return (
                    <Text>React Note</Text>
                );
            case 'createNote':
                return (
                    <Text>Create Note</Text>
                );
        }
    }
}

export default class ReactNotes extends Component {

    constructor(){
        super()
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene(route,navigator){
        switch(route.name){
            case 'home':
                return(
                    <HomeScreen/>
                );
            case 'createNote':
                return(
                    <NoteScreen/>
                )
        }

    }

  render() {
    return (
        <Navigator initialRoute={{name:'home', index:0}}
                   renderScene={this.renderScene}
                   navigationBar={
                       <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                       />
                   }
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
