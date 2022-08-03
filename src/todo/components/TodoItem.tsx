
const TodoItem = (props: any) => {
    const handleTodoRemove = () => {
        props.onCheck(props.id);
    }

    return (
        <div className="TodoItem" onClick={handleTodoRemove}>
            <input type="checkbox" />
            <label>{props.title}</label>
        </div>
    );
}

export default TodoItem;