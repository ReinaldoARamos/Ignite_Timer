import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 5rem);
  margin: 5rem;

  background: ${(props) => props.theme['gray-800']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
