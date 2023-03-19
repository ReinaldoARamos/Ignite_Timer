import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList, StatusColor } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
export function History() {
  const { cycles } = useContext(CyclesContext)
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
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.FinishedDate && (
                      <StatusColor StatusColor="green">Concluído</StatusColor>
                    )}

                    {cycle.interruptedDate && (
                      <StatusColor StatusColor="red">Interrompido</StatusColor>
                    )}

                    {!cycle.FinishedDate && !cycle.interruptedDate && (
                      <StatusColor StatusColor="yellow">
                        Em Andamento
                      </StatusColor>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
