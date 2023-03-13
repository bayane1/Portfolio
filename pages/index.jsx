import React from 'react';
import SectionSubtitle from '../components/Fragments/SectionSubtitle';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import useDownloader from 'react-use-downloader';
import profImg from '../public/images/info.png';
import classes from '../styles/Accueil.module.css';
import Typewriter from 'typewriter-effect';
import Head from 'next/head';

const Accueil = () => {
  const { download } = useDownloader();

  const fileUrl = '../images/CV-Laila.pdf';
  const filename = 'CV-Laila.pdf';
  return <>
    <Head>
      <title>Portfolio - Accueil</title>
      <meta name="description" content='Page d"accueil de mon portfolio développée par React' />
      <meta proprety="org:title" content='Portfolio - Accueil'></meta>
      <meta proprety="org:description" content='Page d"accueil de mon portfolio développée par React'></meta>
      <meta proprety="org:image" content='http://localhost:3000/public/images/resto_acceuil.png'></meta>
    </Head>
    <section className={`${classes.Home}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.content}`}>
              <SectionSubtitle subtitle="Hello" />

              <div>
                <h2 className={`${classes.title}`}>Welcome to my portfolio</h2>
                <div className={`${classes.writer}`}>
                  <h3 className="text-2x1 mt-3 text bg[#d28c01]">
                    <Typewriter
                      options={{
                        strings: [
                          'Frontend Developper',
                          'Java',
                          'Next.js',
                          'Java-script',
                          'C#',
                        ],

                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h3>
                </div>
              </div>
              <p className={`${classes.info}`}>
                I am currently a student in my final semester in computer
                programming. I like the web programing, and I enjoy gaining new
                information, learning new techniques and developing new skills!.
              </p>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.info_img} text-end`}>
              <Image src={profImg} alt="info-image" width="278" height="283" priority loading="eager" />
              <div className={`${classes.btn}`}>
                <button
                  className="cv__btn"
                  onClick={() => download(fileUrl, filename)}
                >
                  <a href="#">
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>;
};

export default Accueil;
