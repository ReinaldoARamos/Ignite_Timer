import { createContext, useContext, useState } from "react";
import { any } from "zod";

const CyclesContext = createContext({} as any); 
function NewCycleForm() {
  let { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <div>
      <h1>newCycleForm: {activeCycle}</h1>
      <button  onClick={()=>{
       setActiveCycle("doridoridoridori")
      }}>
        Alterar ciclo
    </button>
    </div>
  );
}
function Coundown() {
  let { activeCycle } = useContext(CyclesContext);
  return <h1>newCycleForm: {activeCycle}</h1>;
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{activeCycle, setActiveCycle}}>
      <div>
        [<h1>Home</h1>]
        <NewCycleForm />
        <Coundown />
      </div>
    </CyclesContext.Provider>
  );
}
