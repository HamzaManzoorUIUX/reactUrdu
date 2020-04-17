import {
  GET_TODAY,
  DELETE_TODAY,
  ADD_TODAY,
  UPDATE_TODAY,
} from "../actions/type";

const initialState = {
  today: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODAY:
      return {
        ...state,
        today: action.payload,
      };
    case DELETE_TODAY:
      return {
        ...state,
        today: state.today.filter((item) => item.id!==action.payload),
      };
    case ADD_TODAY:
      return {
        ...state,
        today: [action.payload, ...state.today],
      };

    case UPDATE_TODAY:
      return {
        ...state,
      };
    default:
      return state;
  }
}
