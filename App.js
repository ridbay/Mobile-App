import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

// import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Navidation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// import { SearchBar} from "react-native-elements";
import SignInScreen from "./src/screens/signIn";
import SignUpScreen from "./src/screens/signUp";
import HomeScreen from "./src/screens/Home";
import UserHomeScreen from "./src/screens/UserHome"

const Stack = createStackNavigator();
export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function fetchFont() {
      // console.log(localStorage.getItem("token"))
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    }
    fetchFont();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#F2871E",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Panda home",
                // headerStyle: {
                //   backgroundColor: "#f4511e",
                // },
                // headerTintColor: "#fff",
                // headerTitleStyle: {
                //   fontWeight: "bold",
                // },

                //Adding button to the header
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a button!")}
                    title="Info"
                    color="#fff"
                  />
                ),
              }}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="UserHome" component={UserHomeScreen} />
          </Stack.Navigator>
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import * as React from "react";
// import { StyleSheet, View } from "react-native";
// import { SearchBar, Text } from "react-native-elements";

// export default function App() {
//   const [value, setValue] = React.useState("");
//   return (
//     <View style={styles.container}>

//       <Text>React Native App developed by Ridbay!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
