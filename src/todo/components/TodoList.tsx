import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { todoRemove } from "../state/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const count = useAppSelector((state: RootState) => state.todo.count);
    const todos = useAppSelector((state: RootState) => state.todo.todos);
    const dispatch = useAppDispatch()


    const handleTodoRemove = (id: number) => {
        dispatch(todoRemove(id));
    }

    return (

        <div className="todolist">
            {count > 0 && todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onCheck={handleTodoRemove}
                />
            ))}

            {count === 0 && <p>0 todo(s)</p>}

        </div>
    );
}


export default TodoList;