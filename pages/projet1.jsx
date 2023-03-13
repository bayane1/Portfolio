import React from 'react';
import Image from 'next/image';
import { Container } from 'reactstrap';
import classes from '../styles/Projet1.module.css';
import projet1_img from '../public/images/projet1_img.png';
import Head from 'next/head';
const Projet1 = () => {
  return (
    <>
    <Head>
    <title>Portfolio - Projet1</title>
    <meta name="description" content='Page Projet1 de mon portfolio développée par React'/>
    <meta proprety="org:title" content='Portfolio - Projet1'></meta>
      <meta proprety="org:description" content='Page Projet1 de mon portfolio développée par React'></meta>
      <meta proprety="org:image" content='http://localhost:3000/images/resto_acceuil.png'></meta>
  </Head>
    <Container>
      <div className={`${classes.pr1}`}>
        <div>
          <div className={`${classes.projet_title}`}>
            <h1>Project 1 Details</h1>
          </div>
          <div className={`${classes.cpr1}`}>
            <p>
              This site has been developed as part of the web server course, it
              is a WEB site for a restaurant that allows you to register and
              authenticate yourself, to carry out orders from a menu, to check
              the status of the basket, validate the order and update its
              status.
            </p>
            <span>Languages : JavaScript, html, CSS, NodeJS, MySQL </span>
          </div>
        </div>

        <div>
          <div>
            <h4 className={`${classes.Projet1_h4}`}>Restaurant Website</h4>
          </div>
          <Image
            className={`${classes.Projet1__img}`}
            alt="projet1_imgl-img"
            src={projet1_img}
          />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Projet1;
