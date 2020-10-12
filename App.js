import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import Contact from "./components/Contact";

const Stack = createStackNavigator();

export default function App() {
  //stack navigator provides gestures and animations when navigating between routes
  //route config for children and additonal props
  //createStackNavigator returns screen and navigator
  //navigation container manages navigation tree and containes navigation state
  //can specify options object in stack screen like the title to render in the header
  //to specify additional props, render callback
  //to navigate to another route use navigation prop that is already passed down to our screen components
  //to add another screen change navigatio to push <Button
  //   title="Go to Details... again"
  //   onPress={() => navigation.push('Details')}
  // />
  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Contact"
          component={Contact}
          initialParams={{ id: "Anisa" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /* </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

//pass data to routes
// navigation.navigate('RouteName', { /* params go here */ })
//or read params in screen component route.params

/* navigation.navigate('RouteName') pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen.
We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack(). On Android, the hardware back button just works as expected.
You can go back to an existing screen in the stack with navigation.navigate('RouteName'), and you can go back to the first screen in the stack with navigation.popToTop().
The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route). */
