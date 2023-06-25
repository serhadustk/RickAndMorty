import {combineReducers} from 'redux';
import charactersReducers from './charactersReducers';
const rootReducer = combineReducers({
  characters: charactersReducers,
  // Diğer reducer'ları buraya ekleyebilirsiniz.
});

export default rootReducer;
