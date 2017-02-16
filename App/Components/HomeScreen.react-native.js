/**
 * Created by aman on 17/02/2017.
 */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FA4C44'
    }
})