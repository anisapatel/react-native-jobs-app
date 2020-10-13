import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Search = ({ fetchJobs }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleKeywordChange = (text) => {
    setKeyword(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for job title, keywords or company"
          maxLength={20}
          onChangeText={handleKeywordChange}
          value={keyword}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="City or postcode"
          maxLength={20}
          onChangeText={handleLocationChange}
          value={location}
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchJobs(keyword, location)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 20,
    width: "90%",
    flexDirection: "column",
    paddingBottom: 40,
  },
  input: {
    height: 50,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    borderColor: "black",
    width: "100%",
    margin: 5,
  },
  button: {
    padding: 7,
    margin: 4,
    backgroundColor: "#24a0ed",
    borderRadius: 10,
    width: "40%",
    alignSelf: "flex-end",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
