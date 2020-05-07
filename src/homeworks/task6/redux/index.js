import { combineReducers } from 'redux';
import gistsReducer from '../redux/redusers/gitList';
import infoGitReducer from '../redux/redusers/gitsInfo';

const rootReducer = combineReducers({
   gits: gistsReducer,
   gitsInfo: infoGitReducer,
});

export default rootReducer;