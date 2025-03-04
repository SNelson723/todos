import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";
import decodeReducer from './reducers/decodeSlice';
import storeReducer from './reducers/storeSlice';
import contractsReducer from './reducers/contractSlice'
import fieldReducer from './reducers/fieldSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    decodes: decodeReducer,
    stores: storeReducer,
    contracts: contractsReducer,
    fields: fieldReducer
  },
});
