import styled from 'styled-components';

export const Extras = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 background-color: ${p => p.theme.colors.greens};
 padding:15px;

   ul {
    display: flex;
    gap: 20px;
  }
`;