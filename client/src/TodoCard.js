import "./todoCard.css";

const TodoCard = ({ tituloTodo }) => {
    tituloTodo = tituloTodo || "TODO sin nombre";
    return (
        <div onClick="" className='TodoCard unselectable'>
            <h1>{tituloTodo}</h1>
        </div>
    );
}

export default TodoCard;

