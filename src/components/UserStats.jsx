function UserStats({ usuarios }) {
  const total = usuarios.length;

  return (
    <p className="user-stats">Total de usuários encontrados: {total}</p>
  );
}

export default UserStats;
