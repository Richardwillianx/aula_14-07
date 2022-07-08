import { useState, useEffect } from "react";
import ContainerFlex from "../../components/ContainerFlex";

type TUser = {
  nome: string;
  email: string;
  telefone: string;
};

export default function Atividades() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [lista, setLista] = useState<TUser[]>([]);

  function addUser(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const user = {
      nome,
      email,
      telefone,
    };
    setLista([user, ...lista]);
    setNome("");
    setEmail("");
    setTelefone("");
  }

  useEffect(() => {
    setNome("");
    setEmail("");
    setTelefone("");
  }, [lista]);

  return (
    <>
      <ContainerFlex>
        <label htmlFor="text">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="tel">Telefone</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <button type="submit" onClick={(event) => addUser(event)}>
          Enviar
        </button>
      </ContainerFlex>
      <ul>
        {lista.map((user) => {
          return (
            <li>
              {user.nome} {user.email} - {user.telefone}
            </li>
          );
        })}
      </ul>
      {lista.length > 5 ? "Você ganhou frete grátis!" : null}
      {/*  <ContainerFlex>
        <TabelaDados />
      </ContainerFlex> */}
    </>
  );
}

// Criar um formulario com: nome, email e telefone
// Criar um botão que quando clicado, adiciona um novo item a lista
// abaixo do formulário, lista do array
