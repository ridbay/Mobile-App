import React from "react";
import { Image, Button, View, Text } from "react-native";
import Header from "../components/Header";
import Logo from "../images/pandar_logo-orange.png";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={Logo} />
        <Text>Welcome to Panda</Text>
        <Button
          title="Go to Sign In page"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
