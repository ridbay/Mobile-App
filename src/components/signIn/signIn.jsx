import React from "react";
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
import { Button, StyleSheet, Image } from "react-native";
const logo = require("../../images/pandar_logo-orange.png");
import HeaderComponent from "../Header";

const signIn = ({ navigation }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Avatar
          rounded
          title="MD"
          source={{
            uri: `${logo}`,
          }}
          style={styles.avatar}
        />
        <Image style={styles.avatar} source={logo} />
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
      <Button
        title="Go to Sign Up page"
        onPress={() => navigation.navigate("SignUp")}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 40,
  },
});
export default signIn;
