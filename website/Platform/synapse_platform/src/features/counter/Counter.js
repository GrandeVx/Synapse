import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
userData,
setUserId
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(userData);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('8');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
        <h1>{count}</h1>
        <button
          className={styles.button}
          onClick={() => dispatch(setUserId("dio"))}
        >
          Add Amount
        </button>

      </div>

  );
}
