import styled from 'styled-components';


export const HomeHeaderContainer = styled.div`
  width: 100%;
  height: 9vh;
  background-color: ${(props) => props.theme.headerBackground};
  background-image: ${(props) => props.theme.headerBackground};  
  min-height: 9vh;
  align-items: center;
  display: grid;
  grid-template-columns: 25vw 40vw 35vw;
  grid-template-rows: auto;

`;

export const SearchBarStyle = styled.div`
  height: 30px;
  width: 40vw;
  background-color: #353535;
  display: flex;
  align-iitems: center;
  justify-content: center;
  padding: 8px;
  border-radius:5px;

`;

export const HomeHeaderIcons = styled.div`
  width: 20vw;
  height: 40px;
  margin-left: 8vw;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  padding-left:10px;
  padding-right:10px;
`;
