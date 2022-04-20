import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import {
  FaAngleDoubleRight,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import toggleElement from '../../../utils/toggle';
import { Container, ErrorMessage } from './style';

const {
  REACT_APP_YOUR_SERVICE_ID,
  REACT_APP_YOUR_TEMPLATE_ID,
  REACT_APP_YOUR_PUBLIC_KEY,
} = process.env;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        REACT_APP_YOUR_SERVICE_ID,
        REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        REACT_APP_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, <FaExclamationCircle title="15 caracteres ou menos" />)
        .required(<FaExclamationCircle title="Campo obrigatório" />),
      user_email: Yup.string()
        .email(<FaExclamationCircle title="Email Inválido" />)
        .required(<FaExclamationCircle title="Campo obrigatório" />),
      user_subject: Yup.string()
        .max(30, <FaExclamationCircle title="30 caracteres ou menos" />)
        .required(<FaExclamationCircle title="Campo obrigatório" />),
      message: Yup.string()
        .max(150, <FaExclamationCircle title="150 caracteres ou menos" />)
        .required(<FaExclamationCircle title="Campo obrigatório" />),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (values) {
        sendEmail();
        setSent(true);
      }
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      }, 1000);
    },
  });

  return (
    <Container ref={form} onSubmit={formik.handleSubmit}>
      <label htmlFor="user_name">
        <input
          id="user_name"
          name="user_name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_name}
          placeholder="Nome"
        />
        <ErrorMessage>
          {formik.touched.user_name && formik.errors.user_name ? (
            <div>{formik.errors.user_name}</div>
          ) : null}
        </ErrorMessage>
      </label>

      <label htmlFor="user_subject">
        <input
          id="user_subject"
          name="user_subject"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_subject}
          placeholder="Assunto"
        />
        <ErrorMessage>
          {formik.touched.user_subject && formik.errors.user_subject ? (
            <div>{formik.errors.user_subject}</div>
          ) : null}
        </ErrorMessage>
      </label>

      <label htmlFor="user_email">
        <input
          id="user_email"
          name="user_email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_email}
          placeholder="Email"
        />
        <ErrorMessage>
          {formik.touched.user_email && formik.errors.user_email ? (
            <div>{formik.errors.user_email}</div>
          ) : null}
        </ErrorMessage>
      </label>

      <label htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows="5"
          cols="25"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Escreva uma mensagem aqui..."
        />
        <ErrorMessage>
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </ErrorMessage>
      </label>

      <button type="submit" value="Send">
        {toggleElement(sent, 'Enviado', 'Enviar')}
        {toggleElement(
          sent,
          <FaCheckCircle className="icon" />,
          <FaAngleDoubleRight className="icon" />,
        )}
      </button>
    </Container>
  );
}
