import { Outlet } from "react-router-dom/dist";
import Footer from "./Footer";
import NavBar from "./NavBar";

import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Footer />
    </div>
  );
}

export default AppLayout;
