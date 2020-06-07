import React from "react";
import { registerRootComponent } from "expo";
import { StyleSheet, StatusBar } from "react-native";

import Routes from "./routes";

function App() {
  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}

registerRootComponent(App);

export default App;
