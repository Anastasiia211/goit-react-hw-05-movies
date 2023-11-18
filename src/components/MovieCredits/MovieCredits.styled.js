import styled from 'styled-components';

export const Error = styled.ul`
background-color: ${p => p.theme.colors.greens};
padding:10px 30px;

`;

export const CreditsCard = styled.ul`
background-color: ${p => p.theme.colors.greens};
padding-top:20px;
display: flex;
gap: 10px;
flex-wrap: wrap;

li {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
  `;