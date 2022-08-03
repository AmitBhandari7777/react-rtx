import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { decrement, increment } from "../state/counterSlice";



const Counter = () => {

    const count = useAppSelector((state: RootState) => state.counter.value);
    const dispatch = useAppDispatch()

    return (
        <div>
            <button aria-label="Increment Value" onClick={() => dispatch(increment())}>Increment</button>

            <span>{count}</span>

            <button aria-label="Decrement Value" onClick={() => dispatch(decrement())}>Decrement</button>

        </div>
    )
}
export default Counter;