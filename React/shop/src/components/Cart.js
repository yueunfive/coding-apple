import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge } from "../store/userSlice";
import { addCount } from "../store/store";

function Cart() {
  // Redux store에 있던 state 남음
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name}({state.user.age})의 장바구니
      </h6>
      <button
        onClick={() => {dispatch(changeAge(1))}}>
        떡국
      </button>
      <button
        onClick={() => {dispatch(changeName())}}>
        한글
      </button>
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
                  onClick={() => {dispatch(addCount(state.cart[i].id))}}>
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
