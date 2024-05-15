import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonApi } from "../features/pokemon/pokemonApi";
import pokemonReducer from "../features/pokemon/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemon"], // Only persist the pokemon slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
