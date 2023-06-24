import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./store";

function Cart() {
  // Redux store에 있던 state 남음
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      {state.user}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
