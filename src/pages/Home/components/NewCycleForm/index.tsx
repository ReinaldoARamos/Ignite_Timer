import { FormContainer, MinutesAmount, TaskInput } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Action } from "@remix-run/router";

export function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa"),
    minutesAmount: zod.number().min(0.5).max(60),
  });
  /*
  O Register é uma função que vem junto do hook form, atravé dela temos diversos acessos a outros métodos
  que são geralmente usado com funções, como onchange, onblue e até onFocus */
  
  const { register, handleSubmit, watch, formState, reset } =
    useForm<newCycleData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });
    type newCycleData = zod.infer<typeof newCycleFormValidationSchema>;
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
