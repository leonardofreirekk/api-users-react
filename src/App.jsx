import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserStats from "./components/UserStats";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const [termoBusca, setTermoBusca] = useState("");

  // Função para buscar usuários na API
  async function buscarUsuarios(termo = "") {
    setLoading(true);
    setErro("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const dados = await res.json();
      // Filtra pelo termo de busca
      const filtrados = dados.filter((u) =>
        u.name.toLowerCase().includes(termo.toLowerCase()),
      );
      setUsuarios(filtrados);
    } catch (e) {
      setErro("Não foi possível carregar os usuários.");
    } finally {
      setLoading(false);
    }
  }

  // Busca inicial ao montar componente
  useEffect(() => {
    buscarUsuarios();
  }, []);

  function lidarComBusca(termo) {
    setTermoBusca(termo);
    buscarUsuarios(termo);
  }

  return (
    <div className="app">
      <h1>Busca de Usuários</h1>

      <UserForm termoBusca={termoBusca} lidarComBusca={lidarComBusca} />

      {loading && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      <UserStats usuarios={usuarios} />

      <UserList usuarios={usuarios} />
    </div>
  );
}

export default App;
