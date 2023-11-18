import { Navigation } from "../Navigation/Navigation";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, HeaderTop } from './Layout.styled';

export const Layout = () => {
    return (
       <>
      <Header>
        <HeaderTop>
        <Container>
        <p>Best movie finder ever</p>   
        </Container>
        </HeaderTop>

         <Container>
          <Navigation />
        </Container>
      </Header>

      <Container>
        <Suspense fallback={'LOADING PAGE...'}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};