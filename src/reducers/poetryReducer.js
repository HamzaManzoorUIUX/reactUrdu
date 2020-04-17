import {
  GET_POETRY,
  DELETE_POETRY,
  ADD_POETRY,
  UPDATE_POETRY,
} from "../actions/type";

const initialState = {
  poetry: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POETRY:
      return {
        ...state,
        poetry: action.payload,
      };
    case DELETE_POETRY:
      return {
        ...state,
        poetry: state.poetry.filter((item) => item.id!==action.payload),
      };
    case ADD_POETRY:
      return {
        ...state,
        poetry: [action.payload, ...state.poetry],
      };

    case UPDATE_POETRY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
