import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import Link from 'next/link';
import classes from '../../styles/Menu.module.css';

const NAV_LINK = [
  {
    path: '/',
    display: 'Accueil',
  },
  {
    path: '/portfolio',
    display: 'Portfolio',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Menu = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);
  return (
    <div>
      <header className={`${classes.header}`}>
        <Container>
          <div className={`${classes.nav__wrapper}`}>
            <div className={`${classes.logo}`}>
              <h1>
                <span>L</span>aila
              </h1>
            </div>

            {/* ========= nav menu =========== */}
            <div
              className={`${classes.navigation}`}
              ref={menuRef}
              onClick={toggleMenu}
            >
              <div className={`${classes.nav__menu}`}>
                {NAV_LINK.map((item, index) => (
                  <Link href={item.path} key={index}>
                    {item.display}
                  </Link>
                ))}

                <div className={`${classes.nav__right}`}>
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <i className="ri-mail-line"></i>
                    <span>
                      <a href="mailto:laila.ca@gmail.com">Envoyer un e-mail</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <span className={`${classes.mobile__menu}`}>
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Menu;
