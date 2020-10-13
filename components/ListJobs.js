import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListJobs = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("JobsDetail", {
          jobInfo: item,
        })
      }
    >
      <View style={styles.container}>
        <Text style={styles.text}>{item.jobTitle}</Text>
        <Text style={styles.text}>{item.employerName}</Text>
        <Text style={styles.text}>{item.locationName}</Text>
        <Text style={styles.text}>
          £{item.minimumSalary} - £{item.maximumSalary} a year
        </Text>
      </View>
    </TouchableOpacity>
  );
};
//type in job, location and search to send request parameters, query parameters
// select job and navigate to single page to display more info
// filter/sort box to filter job by date location expiry date salary range
//link to take you to where you can apply for job so like an apply button
//scroll view to view more jobs

export default ListJobs;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    margin: 10,
  },
  text: {
    fontSize: 18,
  },
});
