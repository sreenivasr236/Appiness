
import { combineReducers } from 'redux';
import dashboardReducer from './Reducer/dashboardReducer';
import loginReducer from './Reducer/loginReducer';
const rootReducer = combineReducers({
    counter: loginReducer,
    information: dashboardReducer

});

export default rootReducer;