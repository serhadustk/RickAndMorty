import {combineReducers} from 'redux';
import intakesReducers from './charactersReducers';
const rootReducer = combineReducers({
  intake: intakesReducers,
  // Diğer reducer'ları buraya ekleyebilirsiniz.
});

export default rootReducer;
