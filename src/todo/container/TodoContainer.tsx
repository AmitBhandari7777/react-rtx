import { TodoAdd } from "../components/TodoAdd";
import TodoList from "../components/TodoList";


export function TodoContainer() {

    return (
        <div>
            <TodoAdd />
            <TodoList />
        </div>
    );
}