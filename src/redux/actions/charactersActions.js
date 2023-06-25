import {CHARACTER_LIST_URL} from '../../service/Urls';
import {getRequest} from '../../service/Verbs';
import {
  FETCH_CHARACTERS,
  CHARACTERS_PENDING,
  CHARACTERS_REJECT,
} from '../types/charactersTypes';

export const getCharacters = () => {
  return async dispatch => {
    try {
      dispatch({type: CHARACTERS_PENDING});
      const response = await getRequest(CHARACTER_LIST_URL);
      const {data} = response.results;
      dispatch({
        type: FETCH_CHARACTERS,
        payload: data,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT});
    }
  };
};
