import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './features/counter/counter'; // ✅ correct path

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleincreament() {
    dispatch(increment());
  }

  function handledecreament() {
    dispatch(decrement());
  }

  return (
    <div className='container'>
      <button onClick={handleincreament}>+</button>
      <p>Count: {count}</p>
      <button onClick={handledecreament}>-</button>
    </div>
  );
}

export default App;
