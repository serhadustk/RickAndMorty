// reducers/userReducer.js

import {
  FETCH_CHARACTERS,
  CHARACTERS_PENDING,
  CHARACTERS_REJECT,
} from '../types/charactersTypes';

const initialState = {
  characters: [],
  pending: false,
};

const charactersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        pending: false,
      };
    case CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        characters: [],
      };
    default:
      return state;
  }
};

export default charactersReducers;
