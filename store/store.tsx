import { configureStore } from '@reduxjs/toolkit'
import uberReducer from "./uberSlices"

export default configureStore({
  reducer: {
    uber: uberReducer,
  },

})