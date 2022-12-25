import {
  ADD_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  FILTER_SERVICES,
  REMOVE_SERVICE,
  RESET_SERVICE,
  SAVE_SERVICE,
} from "./actionsTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function resetService() {
  return { type: RESET_SERVICE };
}

export function saveService(id, name, price) {
  return { type: SAVE_SERVICE, payload: { id, name, price } };
}

export function filterServices(filter) {
  return { type: FILTER_SERVICES, payload: { filter } };
}
