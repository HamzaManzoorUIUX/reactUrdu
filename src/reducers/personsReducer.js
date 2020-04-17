import {
  GET_PERSONS,
  DELETE_PERSONS,
  ADD_PERSONS,
  UPDATE_PERSONS,
} from "../actions/type";

const initialState = {
  persons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload,
      };
    case DELETE_PERSONS:
      return {
        ...state,
        persons: state.persons.filter((item) => item.id!==action.payload),
      };
    case ADD_PERSONS:
      return {
        ...state,
        persons: [action.payload, ...state.persons],
      };

    case UPDATE_PERSONS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
