import React from 'react';

import { Container } from 'reactstrap';
import classes from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <div className={`${classes.footer__copyright}`}>
          <p>
            &copy; Copyright {year} - Developed by Laila Ait Ali. All right
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
