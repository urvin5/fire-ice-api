import {
  GET_BOOKS,
  GET_CHARACTER,
  SET_CHARACTER,
} from "../Constants/actionTypes";

function getAllBooks(data) {
  return {
    type: GET_BOOKS,
    payload: data,
  };
}
function setCharacter(data) {
  return {
    type: SET_CHARACTER,
    payload: data,
  };
}
function getCharacter(data) {
  return {
    type: GET_CHARACTER,
    payload: data,
  };
}
export { getAllBooks, setCharacter, getCharacter };
