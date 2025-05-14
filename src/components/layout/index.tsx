import { Header } from '../header';
import { Container } from '../container';
import { NavBar } from '../nav-bar';

export const Layout = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="flex-2-p4">
          <NavBar />
        </div>
      </Container>
    </>
  )
}