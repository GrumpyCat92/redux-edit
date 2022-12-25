import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  changeServiceField,
  resetService,
  saveService,
} from "../actions/actionCreators";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.id) {
      dispatch(saveService(item.id, item.name, item.price));
    } else {
      dispatch(addService(item.name, item.price));
    }
    dispatch(resetService());
  };

  const handleCancel = () => {
    dispatch(resetService());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <input name="id" onChange={handleChange} type="hidden" value={item.id} />
      {item.id ? (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      ) : null}
      <button type="submit">Save</button>
    </form>
  );
}
