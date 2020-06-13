import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { ApplicationState } from "./store/modules/rootReducer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SelectProvider from "./pages/Appointment/SelectProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import SelectDate from "./pages/Appointment/SelectDate";

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

function NewAppointment() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="SelectProvider"
      screenOptions={{
        headerTintColor: "#fff",
        headerTransparent: true,
        headerTitleAlign: "center",
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        component={SelectProvider}
        name="SelectProvider"
        options={{
          title: "Selecione o prestador",
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        component={SelectDate}
        name="SelectDate"
        options={{
          title: "Selecione um horário",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SelectProvider")}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        keyboardHidesTabBar: true,
        inactiveTintColor: "rgba(255, 255,255, 0.6)",
        tabStyle: {
          borderTopColor: "red",
          borderColor: "red",
          borderWidth: 0,
        },
        style: {
          backgroundColor: "#8d41a8",
          // height: 70,
          // paddingBottom: 10,
          // paddingTop: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Agendamento",
          tabBarIcon: ({ color }) => (
            <Icon name="event" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={NewAppointment}
        options={{
          tabBarVisible: false,
          tabBarLabel: "Agendar",
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={23} />
          ),
        }}
      />
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
