import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkDispatch, thunk } from "redux-thunk";
import locationReducer from "./reducer/locationReducer";

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
