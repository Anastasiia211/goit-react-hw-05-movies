import styled from 'styled-components';

export const Card = styled.div`
background-color: ${p => p.theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
margin-top:40px;
 display: flex;
gap: 40px;

  .info-title{
   margin-bottom:5px;
  }

  .info-card{
    padding: 30px 0;
  }
  `;
