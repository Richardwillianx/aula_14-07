import { useEffect, useState } from "react";

export default function UseEffectHooks() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 1# -> sem segundo parametro -> executa a cada re-render
  useEffect(() => {
    console.log("contador alterado");
  });

  //#2 -> com segundo parametro vazio -> executa apenas uma vez após o componente terminar de renderizar o conteudo
  useEffect(() => {
    console.log("contador alterado 2");
  }, []);

  //#3 -> com segundo parametro com valor -> executa sempre que algum dos valores do parametros for alterado
  useEffect(() => {
    console.log("contador alterado 3");
  }, [count2]);

  return (
    <>
      <h1>UseEffectHooks</h1>;
      <button onClick={() => setCount((old) => ++old)}>+1</button>;
      <button onClick={() => setCount2((old) => old + 5)}>+5</button>;
    </>
  );
}
