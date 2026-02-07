function UserForm({ termoBusca, lidarComBusca }) {
  function enviarBusca(e) {
    e.preventDefault();
    lidarComBusca(termoBusca);
  }

  return (
    <form onSubmit={enviarBusca} className="user-form">
      <input
        type="text"
        value={termoBusca}
        onChange={(e) => lidarComBusca(e.target.value)}
        placeholder="Buscar usuário pelo nome..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default UserForm;
