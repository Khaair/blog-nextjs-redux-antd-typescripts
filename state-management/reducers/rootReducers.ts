import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commentReducers from "./commentReducers";
import userReducers from "./userReducers";

import postReducers from "./postReducers";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postReducers,
  comments: commentReducers,
  users: userReducers

});
// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
