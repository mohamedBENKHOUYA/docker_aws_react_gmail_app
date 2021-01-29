import { configureStore } from '@reduxjs/toolkit';
import {mailReducer} from '../features/mailSlice';
import userReducer from "../features/userSlice";

// return a store
export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

