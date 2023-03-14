import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }

  button {
  }
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap; //Caso a tela dimunua ele quebra os campos em mais linhas
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const BaseCountDownButton = styled.button`
  width: 100%;

  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 1rem;

  font-weight: bold;

  background-color: ${(props) => props.theme['green-500']};

  color: ${(props) => props.theme['gray-100']};
  transition: 0.2s;

  &:disabled {
    background-color: ${(props) => props.theme['green-700']};
    color: ${(props) => props.theme['gray-700']};
    cursor: not-allowed;
    #teste {
      color: ${(props) => props.theme['gray-700']};
      transition: 0.2s;
    }
  }
`

const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 3px solid;
  border-color: ${(props) => props.theme['gray-500']};
  outline: none;
  color: ${(props) => props.theme['gray-100']};
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2.5rem;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  &:placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmount = styled(BaseInput)`
  width: 4rem;
`
export const StopCountDownButton = styled(BaseCountDownButton)``

export const StartCountDownButton = styled(BaseCountDownButton)``
