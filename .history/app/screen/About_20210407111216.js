import React from 'react'
import { View, Text, Button } from 'react-native'
import Navigation from '../Navigation'

export default function About({navigation}) {
    return (
        <View>
            <Text>About</Text>
            <Button title='home' onPress={()=> navigation.navigate("Home")} />
        </View>
    )
}
