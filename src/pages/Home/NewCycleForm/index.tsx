import { FormContainer, MinutesAmount, TaskInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalher em</label>
        <TaskInput
          id="task"
          list="task-suggestgions"
          placeholder="Definir tarefa  "
          disabled={!!activeCycle}
          {...register("task")}
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
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })} // register
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  );
}
