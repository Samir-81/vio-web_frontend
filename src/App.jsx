import "./App.css";
import { useEffect, useState } from "react";


function App() {
    const [statusApi, setStatusApi] = useState(null);
    const [eventos, setEventos] = useState([]);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [erro, setErro] = useState("");

    return (
        <div className="pagina">

            <header className="cabecalho">
                <h1>VIO Web</h1>

                <p>
                    Venda de Ingressos Online
                </p>
            </header>

            <main className="conteudo">

                <section className="card">

                    <h2>
                        Ambiente preparado com sucesso!
                    </h2>

                    <p>
                        O Front-End React do projeto VIO
                        está funcionando corretamente.
                    </p>

                    <p className="status">
                        Front-End: Online
                    </p>

                </section>

            </main>

        </div>
    );

}

export default App;