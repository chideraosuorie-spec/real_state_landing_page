import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "../components/feature/state/HouseSlice";
import landReducer from "../components/feature/state/LandSlice";

export default configureStore({
  reducer: {
    house: houseReducer,
    land: landReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
