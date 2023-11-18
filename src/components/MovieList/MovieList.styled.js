import styled from 'styled-components';

export const List = styled.ul`
padding:15px;
display:grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
 margin-top: 0;
  margin-bottom: 0;
`;

export const Item = styled.li`
background-color: ${p => p.theme.colors.greens};
  max-width: 320px;

    .text-box {
    padding: 30px 20px;
 h3 {
      color: ${p => p.theme.colors.white};
      margin-bottom: 0;
      `;