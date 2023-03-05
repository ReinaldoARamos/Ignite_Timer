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

export const CountdownContainer = styled.div``
