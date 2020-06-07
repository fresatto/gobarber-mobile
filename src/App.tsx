import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, Text, View } from "react-native";

import Routes from "./routes";

function App() {
  return <Routes />;
}

registerRootComponent(App);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
