import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice';
import tableReducer from '../Features/table/tableSlice';

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line no-undef
    auth: authReducer,
    table: tableReducer,
},
});
export default store;