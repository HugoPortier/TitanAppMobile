import React from 'react'
import { View, Text, Button } from 'react-native'
import Navigation from '../Navigation'

export default function About() {
    return (
        <View>
            <Text>About</Text>
            <Button title='Home' onPress={()=> navigation.goBack()} />
        </View>
    )
}
