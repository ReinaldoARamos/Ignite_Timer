import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
flex: 1;
overflow: auto; //quando um elemento passa do seu continer ele cria um scroll
margin-top: 2rem;

table{

    width: 100%;
    border-collapse: collapse;
    min-width: 600px; //força criação de scroll
}

th{
    background-color:  ${(props) => props.theme["gray-600"]};
    padding: 1rem;
    text-align: left;
    color:  ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    line-height: 1.6;
    padding-left: 1.5rem;

    &:first-child{
        border-top-left-radius: 8px;
    }
    &:last-child{
        border-top-right-radius: 8px;
        padding-right : 1.5rem;
    }
}

    td{
        background-color: ${(props) => props.theme["gray-700"]};
        border-top: 4px solid ${(props) => props.theme["gray-800"]};
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child{
            width: 50%;
            padding-left: 1.5rem;
         }
     }
    }

  
`

const STATUS_COLOR  = { //cria um objeto que armazena o valor das cores
    yellow: 'yellow-500',
    red: 'red-500',
    green: 'green-500',
}  as const //marca como const para poder entender que cada uma dessas string nao sao qualquer valor

interface StatusProps{
    StatusColor: 'yellow'  | 'red' | 'green'  //para o statusprops com as consts armazenadas 
}

export const StatusColor = styled.span<StatusProps>` //passamos o valor da interface usando o generic
display: flex;
align-items: center;
gap: 0.5rem;

&::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color:  ${(props) => props.theme[STATUS_COLOR[props.StatusColor]]}; //definimos a cor atraves do valor armazenado
    //dentro do objeto passando como props
}
`
