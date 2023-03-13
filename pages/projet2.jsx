import React from 'react';
import Image from 'next/image';
import { Container } from 'reactstrap';
import classes from '../styles/Projet2.module.css';
import G_programme from '../public/images/G_programme.png';
import G_stagiaire from '../public/images/G_stagiaire.png';
import Liste_stagiaire from '../public/images/Liste_stagiaire.png';
import Head from 'next/head';

const Projet2 = () => {
  return (
    <>
    <Head>
    <title>Portfolio - Projet2</title>
    <meta name="description" content='Page Projet2 de mon portfolio développée par React'/>
    <meta proprety="org:title" content='Portfolio - Projet2'></meta>
      <meta proprety="org:description" content='Page Projet2 de mon portfolio développée par React'></meta>
      <meta proprety="org:image" content='http://localhost:3000/images/resto_acceuil.png'></meta>
  </Head>
    <div>
      <Container>
        <div className={`${classes.Projet2}`}>
          <div className={`${classes.centent}`}>
            <div className={`${classes.pr2}`}>
              <div>
                <div className={`${classes.projet_title}`}>
                  <h1>Project 2 Details</h1>
                  <h4>Application Bureau</h4>{' '}
                </div>
                <div className={`${classes.cp2}`}>
                  <p className={`${classes.p2}`}>
                    {`${`Cette application a été développé dans le cadre du cours «
                    Applications Bureau », Il s’agit d’une application de
                    gestion de stagiaires dotée de 3 pages, qui permet
                    d'ajouter, modifier ou supprimer des programmes ainsi que
                    des stagiaires, et elle nous permet également d'afficher la
                    liste des stagiaires selon leur programme.`}`}
                  </p>
                  <span>Languages : C#, MySQL</span>
                </div>
              </div>

              <div className={`${classes.Projet2__img}`}>
                <div className={`${classes.page_content}`}>
                  <Image alt="G_programme-img" src={G_programme} />
                  <div className={`${classes.p2_span}`}>
                    <h5>Ajout/Suppr de programme</h5>
                    <span>
                      {`${`Cette page permet d'ajouter ou de supprimer un programme`}`}
                    </span>
                  </div>
                </div>
                <div className={`${classes.page_content}`}>
                  <Image alt="G_stagiaire" src={G_stagiaire} />
                  <div className={`${classes.p2_span}`}>
                    <h5>Ajout/Suppr de stagiaire</h5>
                    <span>
                      {`${`Cette page permet d'ajouter ou de supprimer un stagiaire`}`}
                    </span>
                  </div>
                </div>
                <div className={`${classes.page_content}`}>
                  <Image alt="Liste_stagiaire" src={Liste_stagiaire} />
                  <div className={`${classes.p2_span}`}>
                    <h5>Affichage stagiaire</h5>
                    <span className={`${classes.page_description}`}>
                      {`${`Cette page permet d'afficher les stagiaire selon le programme`}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Projet2;
