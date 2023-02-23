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


    console.log(inputValue);


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
                                    <a><i class='bx bxs-trash-alt'></i></a>
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