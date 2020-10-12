import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as api from "../Api";
import ListJobs from "./ListJobs";

const Home = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const jobs = await api.getJobs();
    setJobs(jobs.results);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jobs board</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <ListJobs key={item.jobId} item={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  text: {
    justifyContent: "center",
    fontSize: 20,
  },
});
