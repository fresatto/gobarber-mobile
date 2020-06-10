import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useSelector } from "react-redux";
import { ApplicationState } from "./store/modules/rootReducer";
import Dashboard from "./pages/Dashboard";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Sign() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

const Routes = () => {
  const { logged } = useSelector((state: ApplicationState) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={logged ? "App" : "Sign"}
      >
        {logged ? (
          <Stack.Screen name="App" component={App} />
        ) : (
          <Stack.Screen name="Sign" component={Sign} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
