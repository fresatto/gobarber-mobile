import React from "react";
import { registerRootComponent } from "expo";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}

registerRootComponent(App);

export default App;
