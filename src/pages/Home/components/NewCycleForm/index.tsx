import { FormContainer, MinutesAmount, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Action } from '@remix-run/router'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  //const { activeCycle } = useContext({ CyclesContext })
  const {register} = useFormContext()
  /*
  O Register é uma função que vem junto do hook form, atravé dela temos diversos acessos a outros métodos
  que são geralmente usado com funções, como onchange, onblue e até onFocus */

  //---------------------------------------------
  
  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalher em</label>
        <TaskInput
          id="task"
          list="task-suggestgions"
          placeholder="Definir tarefa  "
         // disabled={!!activeCycle}
          {...register('task')}
          // usando o ... a gente retorna todos os métodos dentro do register
        />
        <datalist id="task-suggestgions">
          <option value="projeto 1"></option>
          <option value="projeto 1"></option>
          <option value="projeto 1"></option>
        </datalist>

        <label htmlFor="minutesAmount">durante </label>
        <MinutesAmount
          type="Number"
          id="minutesAmount"
          placeholder="00"
          min={5}
          step={5}
        //  disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })} // register
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
