import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobsDetail = (props) => {
  const { jobInfo } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{jobInfo.jobTitle}</Text>
      <View style={styles.span}>
        <Text style={styles.text}>{jobInfo.employerName} </Text>
        <Text style={styles.text}>{jobInfo.locationName}</Text>
      </View>

      <Text style={styles.description}>{jobInfo.jobDescription}</Text>
      <Text style={styles.text}>
        Salary: £{jobInfo.minimumSalary} - £{jobInfo.maximumSalary} a year
      </Text>
      <Text style={styles.text}>Expires: {jobInfo.expirationDate}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobsDetail;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    margin: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    textAlign: "left",
  },
  description: {
    fontSize: 20,
    textAlign: "left",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  span: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    padding: 9,
    margin: 5,
    backgroundColor: "#24a0ed",
    borderRadius: 10,
    width: "70%",
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
