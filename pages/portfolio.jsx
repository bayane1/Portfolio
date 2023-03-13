import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../styles/Projets.module.css';
import projets_img1 from '../public/images/projet1-img.png';
import projets_img2 from '../public/images/projet2_img.png';
import Head from 'next/head';

const Projets = () => {
  return (
    <>
    <Head>
    <title>Portfolio - Projets</title>
    <meta name="description" content='Page Projets de mon portfolio développée par React'/>
    <meta proprety="org:title" content='Portfolio - Projets'></meta>
      <meta proprety="org:description" content='Page Projets de mon portfolio développée par React'></meta>
      <meta proprety="org:image" content='http://localhost:3000/images/resto_acceuil.png'></meta>
  </Head>
    <div className={`${classes.projets}`}>
      <div className={`${classes.projet}`}>
        <div>
          <h4 className={`${classes.projetTitle}`}>
            Projet 1 : Website Restaurant
          </h4>
        </div>
        <div className={`${classes.btn_img}`}>
          <Image
            className={`${classes.img}`}
            alt="projet1-imgl-img"
            src={projets_img1}
          />
          <button className={classes.boutton}>
            <Link className={`${classes.a}`} href="/projet1">
              More Details
            </Link>
          </button>
        </div>
      </div>

      <div className={`${classes.projet}`}>
        <div>
          <h4 className={`${classes.projetTitle}`}>
            Projet 2 : Desktop Application
          </h4>
        </div>
        <div className={`${classes.btn_img}`}>
          <Image
            className={`${classes.img}`}
            alt="projet2-imgl-img"
            src={projets_img2}
          />
          <button className={classes.boutton}>
            <Link className={`${classes.a}`} href="/projet2">
              More Details
            </Link>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projets;
