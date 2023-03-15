import { createContext, useContext } from "react";

const CyclesContext = createContext({
  activeCycle: "ohayo"
});
function NewCycleForm() {
    let { activeCycle } = useContext(CyclesContext);
  
    return <h1>newCycleForm: {activeCycle}</h1>;
  }

function Coundown() {
  let { activeCycle } = useContext(CyclesContext);
  return <h1>newCycleForm: {activeCycle}</h1>;
}


export function Home() {
  return (
    <div>
      [<h1>Home</h1>]
      <NewCycleForm />
      <Coundown/>
    </div>
  );
}
