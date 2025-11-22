import React from 'react';
// import Logo from '../../imgLogo/logo.png';
// import './header.css';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="inner-header">
//         <div className="header-logo">
//           <Link to={'/'}>
//             <img src={Logo} alt="" />
//           </Link>
//         </div>
//         <div className="header-navbar">
//           <ul>
//             <li>
//               <Link to={'/sedan/'}>Легковые</Link>
//             </li>
//             <li>
//               <Link to={'/gruzovoy/'}>Микроавтобусы</Link>
//             </li>
//             <li>
//               <Link to={'/lodka/'}>Лодки</Link>
//             </li>
//             <li>
//               <Link to={'/pricep/'}>Прицепы</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="header-number">
//           <h3>+375 44 554 75 75</h3>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>

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
