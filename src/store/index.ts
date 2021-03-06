import { createStore, applyMiddleware, compose, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import createSagaMiddleware from "redux-saga";

import reducers, { ApplicationState } from "./modules/rootReducer";
import rootSagas from "./modules/rootSagas";
import tron from "../config/ReactotronConfig";

const persistConfig = {
  key: "gobarber",
  storage: AsyncStorage,
  whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), tron.createEnhancer())
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
