import React from "react";
import { Button, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Panda</Text>
      <Button
        title="Go to Sign In page"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

export default HomeScreen;
