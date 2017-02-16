/**
 * Created by aman on 17/02/2017.
 */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class NoteScreen extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>Create Notes Screen!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5FBA7D'
    }
})