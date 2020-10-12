import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListJobs = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.jobTitle}</Text>
    </View>
  );
};

export default ListJobs;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  text: {
    fontSize: 18,
  },
});
