import "./styles.css"

const Input = () => {
    return (
        <div className="Container container_input">
            <input className="input" type={Text} placeholder="Digite sua tarefa"></input>
            <button className="button">Add</button>
        </div>
    )
}

export default Input