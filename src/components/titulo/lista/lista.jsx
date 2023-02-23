
import "./styles.css"


const Lista = () => {
    return (
        <div className="Container container__Lista">
            <ul>
                <li className="Container__caixa">
                    <div className="Container__conteudo">
                        <p className="descricao">Estudar Programação</p>
                        <div>
                            <a className="img"><i class='bx bx-check-double'></i></a>
                            <a><i class='bx bxs-trash-alt'></i></a>
                        </div>
                    </div>
                </li>

                <li className="Container__caixa">
                    <div className="Container__conteudo">
                        <p className="descricao">Estudar Programação</p>
                        <div>
                            <a className="img"><i class='bx bx-check-double'></i></a>
                            <a><i class='bx bxs-trash-alt'></i></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Lista