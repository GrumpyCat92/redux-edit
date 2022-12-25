import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  FILTER_SERVICES,
  REMOVE_SERVICE,
  SAVE_SERVICE,
} from "../actions/actionsTypes";

const initialState = {
  filter: "",
  services: [
    {
      id: nanoid(),
      name: "Замена стекла",
      price: 2000,
    },
    {
      id: nanoid(),
      name: "Замена дисплея",
      price: 2500,
    },
  ],
};

export default function ServiceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return {
        ...state,
        services: [...state.services, { id: nanoid(), name, price: +price }],
      };
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        services: state.services.filter((service) => service.id !== id),
      };
    }
    case SAVE_SERVICE: {
      const { id, name, price } = action.payload;
      const index = state.services.findIndex((s) => s.id === id);
      state.services[index] = {
        ...state.services[index],
        name: name,
        price: +price,
      };
      return { ...state };
    }
    case FILTER_SERVICES: {
      const { filter } = action.payload;
      return { ...state, filter: filter };
    }
    default:
      return state;
  }
}
