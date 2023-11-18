import styled from 'styled-components';


export const Container = styled.div`
padding:15px;
max-width: 1360px;
margin: 0 auto;`;

export const Header = styled.header`
 background-color: ${p => p.theme.colors.greens};
 box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  a {
    color: ${p => p.theme.colors.white};
}

  }

   p {
      margin-bottom: 0;
      color: ${p => p.theme.colors.black};
    }
 `;

export const HeaderTop = styled.div`

`;
