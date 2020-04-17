import {
  GET_RASALAY,
  DELETE_RASALAY,
  ADD_RASALAY,
  UPDATE_RASALAY,
} from "../actions/type";

const initialState = {
  rasalay: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RASALAY:
      return {
        ...state,
        rasalay: action.payload,
      };
    case DELETE_RASALAY:
      return {
        ...state,
        rasalay: state.rasalay.filter((item) => item.id!==action.payload),
      };
    case ADD_RASALAY:
      return {
        ...state,
        rasalay: [action.payload, ...state.rasalay],
      };

    case UPDATE_RASALAY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
