import { configureStore } from '@reduxjs/toolkit';
import loginReducer  from '../redux/reducers/loginSlice';


export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});