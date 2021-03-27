import React from 'react'
import { View, Text } from 'react-native';
import signUpComponent from "../components/signUp/signUp"

const signUp = ({ navigation }) => {
    return (
        <View>
            <signUpComponent navigation={navigation} />
        </View>
    )
}

export default signUp
