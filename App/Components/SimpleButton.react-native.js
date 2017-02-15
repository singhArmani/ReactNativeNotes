import React from 'react'
import { Text, View, TouchableOpacity} from 'react-native'

export default class SimpleButton extends React.Component {

    render(){
        return (
            <TouchableOpacity onPress ={() => console.log('button is pressed!')}>
                <View>
                    <Text>Simple Button React Notes</Text>
                </View>
            </TouchableOpacity>

        )
    }
}

