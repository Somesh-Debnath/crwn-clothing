import { combineReducers
 } from "redux";
 import userReducer from "./user/user.reducer";
 export default combineReducers({
        user: userReducer
    });
// Compare this snippet from src\redux\shop\shop.reducer.js:
// const INITIAL_STATE = {
//     collections: null,
//     isFetching: false,
//     errorMessage: undefined
// }
// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'FETCH_COLLECTIONS_START':
//             return {
//                 ...state,
//                 isFetching: true
//             };
//         case 'FETCH_COLLECTIONS_SUCCESS':
//             return {
//                 ...state,
//                 isFetching: false,
//                 collections: action.payload
//             };
//         case 'FETCH_COLLECTIONS_FAILURE':
//             return {
//                 ...state,
//                 isFetching: false,
//                 errorMessage: action.payload
//             };
//         default:
//             return state;
//     }
// };
// export default shopReducer;
