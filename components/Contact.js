import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Contact = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Please send us your feedback</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your comments..."
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send Feedback</Text>
      </TouchableOpacity>

      {/* <Text>Contact</Text> */}
      {/* <Button
        title="Go to Contact... again"
        onPress={() => navigation.push("Contact")}
        //everytime you call push it adds a new route to the navigation stack
        //to programatically go back you can ue navigation.goBack()
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        //goes back to first screen in the stack if you are very far along
      /> */}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 80,
    width: "100%",
  },
  button: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
