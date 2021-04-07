import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({Navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="about" onPress={() => Navigation.navigate('About')} />
    </View>
  );
}
