//중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "redux/modules/counter";
import users from "redux/modules/users";

const rootReducer = combineReducers({
    counter,
    users: users

});
//2. 만든 rootReducer로 store를 생성해준다.
const store = createStore(rootReducer);

//3.만든 store를 외부로 export!

export default store;