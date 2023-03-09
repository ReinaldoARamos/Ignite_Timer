import { Play, Watch } from "phosphor-react";
import { useState } from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "../Home/styles";
import { useForm } from "react-hook-form";
import { Action } from "@remix-run/router";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});
/*
O Register é uma função que vem junto do hook form, atravé dela temos diversos acessos a outros métodos
que são geralmente usado com funções, como onchange, onblue e até onFocus */

interface Cycle {
  id: string;
  task: string;
  minutesAmout: number;
} //criando interface dos ciclos

export function Home() {
  const [cycles, SetCycles] = useState<Cycle[]>([]); //iniciando um estado que irá armazenar todos os ciclos
  const { register, handleSubmit, watch, formState, reset } =
    useForm<newCycleData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  type newCycleData = zod.infer<typeof newCycleFormValidationSchema>;

  function handleCreateNewCycle(data: newCycleData) {
    const newCycle: Cycle = {
        id: String(new Date().getTime()),
        task: data.task,
        minutesAmout: data.minutesAmount,

    }

    SetCycles((state) => [...state, newCycle]) //adicionando um estado novo pegando o anterior e passando o novo
    reset();

  }
  console.log(formState.errors);

  const task = watch("task");

  return (
    //aqui no handleSubmit o HandleCreate new Cyle que pega os dados no Onsubmit
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <div>
            <label htmlFor="task">Vou trabalher em</label>
            <TaskInput
              id="task"
              list="task-suggestgions"
              placeholder="Definir tarefa  "
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
              {...register("minutesAmount", { valueAsNumber: true })}
            />

            <span>minutos.</span>
          </div>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={!task}>
          <Play size={20} id="teste" />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
