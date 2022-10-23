import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import styles from "../styles/counter.module.css";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className={styles.count}>{count}</button>
      <button className={styles.btn} onClick={() => dispatch(increment())}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}
