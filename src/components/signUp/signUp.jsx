import React from "react";
import { Button, View, Text } from "react-native";

const signUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is sign up page</Text>
      <Button
        title="Go to Sign In page"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

export default signUp;
