import styled from 'styled-component'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: brown; 
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Título= styled.a`
    font-size: 35px;
    color: #FFF;
`;

export const BemVindo = styled.h1`
    font-size: 50px;
    color: ${props => `#${this.props.cor}`};
`

// .container{
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 500px;
//   }
  
//   .header{
//     width: 100%;
//     height: 70px;
//     background-color: brown; 
//     justify-content: center;
//     align-items: center;
//     display: flex;
//   }
  
//   .titulo{
//     font-size: 35px;
//     color: #FFF;
//   }