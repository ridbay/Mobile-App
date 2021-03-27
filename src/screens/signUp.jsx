import React from 'react'
import { View, Text } from 'react-native';
import SignUp from "../components/signUp/signUp";

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
           <SignUp navigation={navigation} /> 
        </View>
    )
}

export default SignUpScreen
