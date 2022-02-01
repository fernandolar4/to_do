import React from "react";
import "./App.css";

function App() {
  const [mensagem, setMensagem] = React.useState("");
  const [listaMsg, setListaMsg] = React.useState([]);

  function handleListaMsg(novaMensagem) {
    const MSG = {
      texto: novaMensagem,
      id: listaMsg.length,
    };
    setListaMsg([...listaMsg, MSG]);
    setMensagem("");
  }

  function deletaMensagem(id) {
    const listaFiltrada = listaMsg.filter((message) => message.id !== id);

    setListaMsg(listaFiltrada);
  }

  return (
    <>
      <h1>Afazeres</h1>
      <div>
        <ul>
          {listaMsg.map((msg) => (
            <li key={msg.id}>
              {msg.texto}{" "}
              <button onClick={() => deletaMensagem(msg.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleListaMsg(mensagem);
          }}
        >
          <input
            type="text"
            placeholder="Adicionar Tarefa"
            value={mensagem}
            onChange={(event) => {
              setMensagem(event.target.value);
            }}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
}

export default App;
