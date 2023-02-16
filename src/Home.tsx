import React from "react";
import { createContext, useContext } from "react"; // é uma função que tenho que armazenar em uma variável e o nome dessa variável tem que ter alguma relação com o que eu vou guardar dentro desse contexto

// Se queremos usar esse valor vamos precisar usar uma funçao chamada useContext

// Criando contexto para armazenar algo
const CyclesContext = createContext({ activeCycle: 1 } as any); // Dentro do createContext colocamos como queremos iniciar o contexto, geralmente usamos um objeto

// Quando criamos um contexto e compartilhamos a informação inicial para varios componentes não podemos modificar essas informações o contexto tem o mesmo valor para sempre

// Sempre que temos uma variável no react que o valor será alterado com o tempo principalmente quando o usuário vai fazer alguma interação essa variável precisa ser um estado

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);

  //Conseguimos usar todas as props passadas no value do CycleContext.Provider

  return (
    <>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button onClick={() => setActiveCycle((state: number) => state + 1)}>
        Alterar ciclo ativo
      </button>
    </>
  );
}

function CountDown() {
  const { activeCycle } = useContext(CyclesContext);

  return <h1>CountDown: {activeCycle}</h1>;
}

// Criamos o estado que será alterado no componente pai porque o componente pai é o que está por volta de todos os componentes filhos ou seja os componentes que precisam dessa informação

export function Home() {
  const [activeCycle, setActiveCycle] = React.useState(0);

  // Geralemente dentro do value enviamos todas as informaçoes que queremos enviar

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <CountDown />
      </div>
    </CyclesContext.Provider>
  );
}
