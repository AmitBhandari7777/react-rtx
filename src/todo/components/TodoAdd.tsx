import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { todoAdd } from "../state/todoSlice";


export function TodoAdd() {
    const [input, setInput] = useState("");
    const dispatch = useAppDispatch();

    const handleAddTodo = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(todoAdd(input))
        setInput("")
    }

    return (

        <div className="Todos">
            <h2>Add Todo</h2>

            <form className="Todo-form" onSubmit={handleAddTodo}>
                <div>
                    <input
                        placeholder="Todo Title"
                        name="title"
                        value={input} type="text"
                        onChange={(e) => setInput(e.target.value)} />
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>

            </form>
        </div>
    );

}


