import React from 'react'
import { View, Text, Button } from 'react-native'

export default function About({navigation}) {
    return (
        <View>
            <Text>About</Text>
            <Button title='home' onPress={()=> navigation.navigate("Home")} />
        </View>
    )
}
