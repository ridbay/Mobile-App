import React, { useState } from "react";
import {
  Container,
  // Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import { Avatar } from "react-native-elements";
import { Button, StyleSheet, Image, View, TextInput, Text } from "react-native";
const Logo = require("../../assets/pandar_logo-orange.png");
import HeaderComponent from "../Header";

const signIn = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const onPressSignUp = () => {
    navigation.navigate("SignUp")
  };
  return (
    <View>
      <HeaderComponent />
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
      </View>
      
      <Button title="Sign In" onPress={() => navigation.navigate("UserHome")} />
      <Text>Not you? Switch Account</Text>
      <Text style={styles.signuptext}>Don't have an account yet? <Text onPress={onPressSignUp}>Sign Up</Text> </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  signuptext: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default signIn;
