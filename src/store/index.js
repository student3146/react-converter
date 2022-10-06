import { combineReducers } from "redux";
import { reducer } from "./reducerDollar";
import { reducerE } from "./reducerEuro";


 export const rootReducer = combineReducers({
    reducer,
    reducerE
})