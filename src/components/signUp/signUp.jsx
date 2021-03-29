import React,{useState} from "react";
import { CheckBox,Button, StyleSheet, Image, View, TextInput, Text } from "react-native";

const SignUp = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [name, onChangeName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [password, onChangePassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const onPressSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View>
      {/* <HeaderComponent /> */}
      <View style={styles.containers}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email Address"
          textContentType="emailAddress"
          autoCompleteType="email"
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
          textContentType="name"
          autoCompleteType="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="Phone Number"
          textContentType="telephoneNumber"
          autoCompleteType="tel"
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
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>By checking the box, you agree to our terms and conditions</Text>
      </View>
      <Button title="Sign Up" onPress={() => navigation.navigate("UserHome")} />
      <Text>Got referred by someone?</Text>
      <Text style={styles.signintext}>
        Already have an account? <Text onPress={onPressSignIn}>Sign In</Text>
      </Text>
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
  signintext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default SignUp;
