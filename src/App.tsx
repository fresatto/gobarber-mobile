import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { registerRootComponent } from "expo";
import { StatusBar } from "react-native";

import { Provider } from "react-redux";

import Routes from "./routes";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(App);

export default App;
