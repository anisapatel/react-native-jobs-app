import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <Button
        title="Send feedback"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
