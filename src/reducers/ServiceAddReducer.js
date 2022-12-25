import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  REMOVE_SERVICE,
  RESET_SERVICE,
} from "../actions/actionsTypes";

const initialState = { name: "", price: 0, id: "" };

export default function ServiceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE: {
      const { name, price, id } = action.payload;
      return { ...state, name, price, id };
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      if (id === state.id) {
        return initialState;
      } else {
        return state;
      }
    }
    case RESET_SERVICE: {
      return initialState;
    }
    default:
      return state;
  }
}
