import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as api from "../Api";
import ListJobs from "./ListJobs";
import Search from "./Search";

const Home = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (keyword, location) => {
    const jobs = await api.getJobs(keyword, location);
    setJobs(jobs.results);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jobs board</Text>
      <Search fetchJobs={fetchJobs} />
      <FlatList
        style={{ flex: 1 }}
        data={jobs}
        renderItem={({ item }) => (
          <ListJobs item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.jobId.toString()}
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
