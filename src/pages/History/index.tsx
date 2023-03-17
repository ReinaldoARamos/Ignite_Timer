import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryList, StatusColor } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Terefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmout}</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>
                   {cycle.FinishedDate && (
                   <StatusColor StatusColor="green">Concluído</StatusColor>)}

                    {cycle.interruptedDate && (
                   <StatusColor StatusColor="red">Interrompido</StatusColor>)}
                  
                    
                  {(!cycle.FinishedDate && !cycle.interruptedDate) && (
                   <StatusColor StatusColor="yellow">Em Andamento</StatusColor>)}
                  </td>
                
                  

                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
