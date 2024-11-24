import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset } from './app/counter/counterSlice'

function App() {

  // Use the `useDispatch` and `useSelector` hooks to access the Redux store.
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  // Dispatch actions when buttons are clicked.
  return (
    <>
      <h1>Learn About React Redux toolkit</h1>
      <div>
        <h1>{count}</h1>
        <button onClick={
              () => dispatch(increment())
        }>Increment</button>
        <button onClick={
              () => dispatch(decrement())
        }>Decrement</button>
        <button onClick={
              () => dispatch(reset())
        }> Reset</button>
      </div>
    </>
  )
}

export default App