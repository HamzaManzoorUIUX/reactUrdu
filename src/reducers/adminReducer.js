import {GET_Admin} from "../actions/type";

const initialState = {
  books: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case DELETE_BOOKS:
      return {
        ...state,
        books: state.books.filter((books) => books.id !== action.payload),
      };
    case ADD_BOOKS:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    case UPDATE_BOOKS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
