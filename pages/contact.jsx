
import React from 'react';
import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import { useForm, onErrors } from 'react-hook-form';

/**
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response
 */

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {

    let response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)


    });

    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Portfolio - Contact</title>
        <meta name="description" content='Page Contact de mon portfolio développée par React' />
        <meta proprety="org:title" content='Portfolio - Contact'></meta>
        <meta proprety="org:description" content="age Contact de mon portfolio développée par React"></meta>
        <meta proprety="org:image" content='http://localhost:3000/public/images/resto_acceuil.png'></meta>
      </Head>
      <div className={styles.container}>
        <div>
          {theme}
        </div>
        <div>
          {local}
        </div>

        <h1 className={styles.h1}>Contactez-moi</h1>
        <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit, onErrors)}>
          <label className={styles.label} htmlFor="name">Nom</label>
          <input className={styles.input} type="text" id="name" name="name" noValidate
            {...register("name",
              {
                required: "Le nom est requis !",
                maxLength: 40
              })}
          />
          <span className={styles.avertissement}>{errors.name && errors.name.message}</span>

          <label className={styles.label} htmlFor="email">Adresse e-mail</label>
          <input className={styles.input} type="email" id="email" name="email" noValidate
            {...register("email", {
              required: "Le courriel est requis !",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Le courriel entré est invalide !"
              }
            })}
          />
          <span className={styles.avertissement}>{errors.email && errors.email.message}</span>

          <label className={styles.label} htmlFor="sujet">Sujet</label>
          <input className={styles.input} type="text" id="sujet" name="sujet"
            {...register('sujet',
              { required: "Le sujet est requis !" })}
          />
          <span className={styles.avertissement}>{errors.sujet && errors.sujet.message}</span>

          <label className={styles.label} htmlFor="message">Message</label>
          <textarea className={styles.input} id="message" name="message" rows="5"
            {...register('message', { required: "Le message est requis !" })}
          ></textarea>
          <span className={styles.avertissement}>{errors.message && errors.message.message}</span>

          <button className={styles.button} type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
