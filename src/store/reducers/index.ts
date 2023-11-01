import { combineReducers } from "redux";
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
  orders: orderReducer ,
});

export type RootState = ReturnType<typeof rootReducer>
