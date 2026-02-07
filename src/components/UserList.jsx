import UserItem from "./UserItem";

function UserList({ usuarios }) {
  if (usuarios.length === 0) {
    return <p>Nenhum usuário encontrado!</p>;
  }

  return (
    <div className="user-list">
      {usuarios.map((u) => (
        <UserItem key={u.id} usuario={u} />
      ))}
    </div>
  );
}

export default UserList;
