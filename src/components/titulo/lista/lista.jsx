import { useState } from "react"
import "./styles.css";


const Lista = () => {

    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const addInput = () => {
        if (!inputValue) return inputValue("");

        const newInput = {
            id: Math.random(),
            inputValue: inputValue,
        };

        setList([...list, newInput]);
    }



    return (
        <div>
            <div className="Container container_input">
                <input className="input" type={Text} placeholder="Digite sua tarefa" onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={addInput}>Add</button>
            </div>

            <div className="Container container__Lista">
                <ul>
                    {list.map((inputValue) => (
                        <li id="id" className="Container__caixa" key={inputValue.id}>
                            <div className="Container__conteudo">
                                <p className="descricao">{inputValue.inputValue}</p>
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