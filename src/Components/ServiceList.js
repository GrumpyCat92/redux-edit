import { useDispatch, useSelector } from "react-redux";
import {
  editService,
  filterServices,
  removeService,
} from "../actions/actionCreators";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  };

  const handleChangeFilter = (evt) => {
    dispatch(filterServices(evt.target.value));
  };

  return (
    <>
      <br />
      <input type="text" onChange={handleChangeFilter} value={items.filter} />
      <ul>
        {items.services
          .filter((s) =>
            s.name.toLowerCase().includes(items.filter.toLowerCase())
          )
          .map((o) => (
            <li key={o.id}>
              {o.name} {o.price}
              <button onClick={() => handleEdit(o.id, o.name, o.price)}>
                Edit
              </button>
              <button onClick={() => handleRemove(o.id)}>x</button>
            </li>
          ))}
      </ul>
    </>
  );
}
