import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectCount } from "./features/counter/counterSlice"
import { addHistory, selectHistory } from "./features/counter/historySlice";

const App = () => {
  const count = useSelector(selectCount);
  const history = useSelector(selectHistory)
  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment());
    dispatch(addHistory('I'));
  }

  const handleDecrement = ()=>{
    dispatch(decrement());
    dispatch(addHistory('D'));
  }
  return (
     <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <p> History :
          {
            history.map((h, index) => (
              <span key={index}> {h + ', '}</span>
            ))
          }
        </p>
      </div>
    </div>

  )
}

export default App