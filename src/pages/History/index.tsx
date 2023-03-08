import { HistoryContainer, HistoryList, StatusColor } from "./styles";

export function History() {
  return(
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
          <tr>
            <td>Tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
           <td>
           <StatusColor>Concluído</StatusColor>
           </td>
          </tr>
          <tr>
            <td>Tarefa</td>
            <td>20 minutos</td>
            <td>Há 2 meses</td>
            <td>
            <StatusColor>Concluído</StatusColor>
              </td>
          </tr>
       
        </tbody>
      </table>
    </HistoryList>
  </HistoryContainer>
  )
}
