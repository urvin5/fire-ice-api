import {
  GET_BOOKS,
  GET_CHARACTER,
  SET_CHARACTER,
} from "../Constants/actionTypes";

export function reducer(state = {}, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        booksList: action.payload,
      };
    case SET_CHARACTER:
      return {
        ...state,
        characterUrl: action.payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        characterData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
