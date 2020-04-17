import {
  GET_NEWS,
  DELETE_NEWS,
  ADD_NEWS,
  UPDATE_NEWS,
} from "../actions/type";

const initialState = {
  news: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((item) => item.id!==action.payload),
      };
    case ADD_NEWS:
      return {
        ...state,
        news: [action.payload, ...state.news],
      };

    case UPDATE_NEWS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
