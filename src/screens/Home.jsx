import React from "react";
import { ActivityIndicator, Image, Button, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Logo from "../assets/pandar_logo-orange.png";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#5A9BD4",
    paddingTop: 50,
  },
  logo: {
    width: "50%",
      height: "50%",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: `${Logo}`,
          }}
        />
        <ActivityIndicator size="large" color="#00ff00" />
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
