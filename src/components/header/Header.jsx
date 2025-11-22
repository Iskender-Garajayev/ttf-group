import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../imgLogo/logo.png';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand className=" w-12 rounded-3xl" href="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* На мобильных - слева, на планшетах и ноутбуках - по центру */}
            <Nav className="fw-bold me-auto ms-lg-auto me-lg-auto">
              <Nav.Link href="/sedan/">Легковые</Nav.Link>
              <Nav.Link href="/gruzovoy/">Микроавтобусы</Nav.Link>
              <Nav.Link href="/lodka">Лодки</Nav.Link>
              <Nav.Link href="/pricep/">Прицепы</Nav.Link>
            </Nav>

            {/* Телефон показывается только на мобильных внутри меню */}
            <Nav className=" ">
              <Navbar.Text className="fw-bold">+375 29 187-75-66</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
