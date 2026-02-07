import { useState } from "react";

function UserItem({ usuario }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div className="user-item">
      <div className="principal">
        <span onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
          {usuario.name}
        </span>
      </div>

      {mostrarDetalhes && (
        <div className="detalhes">
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
          <p>
            <strong>Telefone:</strong> {usuario.phone}
          </p>
          <p>
            <strong>Empresa:</strong> {usuario.company.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserItem;
