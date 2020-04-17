import {
  GET_INTREST,
  DELETE_INTREST,
  ADD_INTREST,
  UPDATE_INTREST,
} from "../actions/type";

const initialState = {
  intrest: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INTREST:
      return {
        ...state,
        intrest: action.payload,
      };
    case DELETE_INTREST:
      return {
        ...state,
        intrest: state.intrest.filter((item) => item.id!==action.payload),
      };
    case ADD_INTREST:
      return {
        ...state,
        intrest: [action.payload, ...state.intrest],
      };

    case UPDATE_INTREST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
