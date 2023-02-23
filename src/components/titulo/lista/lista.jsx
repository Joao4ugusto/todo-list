import { useState } from "react"
import "./styles.css";


const Lista = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const pegaInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const pegaClick = () => {
        const newItem = { text: inputValue };
        setList([...list, newItem]);
        setInputValue('');
    };


    const exclui = (id) => {

        const newList = list.filter((item) => item.id !== id);
        setList(newList);

    }

    return (
        <div>
            <div className="Container container_input">
                <input className="input" type={Text} placeholder="Digite sua tarefa" onChange={pegaInputValue}></input>
                <button onClick={pegaClick}>Add</button>
            </div>

            <div className="Container container__Lista">
                <ul>
                    {list.map((item, index) => (
                        <li className="Container__caixa" key={index}>
                            <div className="Container__conteudo">
                                <p className="descricao">{item.text}</p>
                                <div>
                                    <a><i class='bx bx-check-double'></i></a>
                                    <a><i onClick={() => exclui(item.id)} class='bx bxs-trash-alt'></i></a>
                                </div>
                            </div>
                        </li>
                    ))}

                </ul >

            </div >
        </div >
    )
}

export default Lista