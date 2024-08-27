import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer, setAllAppKeys, setAppKey} from "./app.slice.ts";
import {
  apiConfiguration,
  useFetchDataQuery,
  useLazyFetchDataQuery
} from "./api.config.ts";

const reducer = combineReducers({
  app: appReducer,
  [apiConfiguration.reducerPath]: apiConfiguration.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({
      serializableCheck: false,
    }).concat(apiConfiguration.middleware);
  },
});

export type RootState = ReturnType<typeof reducer>;

export {
  setAllAppKeys,
  setAppKey,
  useFetchDataQuery,
  useLazyFetchDataQuery,
};
