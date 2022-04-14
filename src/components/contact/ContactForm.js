import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { FaAngleDoubleRight, FaCheckCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import toggleElement from '../../utils/toggle';

const {
  REACT_APP_YOUR_SERVICE_ID,
  REACT_APP_YOUR_TEMPLATE_ID,
  REACT_APP_YOUR_PUBLIC_KEY,
} = process.env;

const FormStyles = styled.div`
  .formContain {
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    form {
      align-items: start;
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: var(--blue-up4);
      border-radius: 12px;
      border: 1px solid var(--gray-5);
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
    }
    label {
      width: 100%;
      font-size: 1.8rem;
      margin-top: 1rem;
      padding: 0.5rem;
      .text {
        display: flex;
        justify-content: space-between;
      }
      input {
        -webkit-box-shadow: inset 1px 0px 2px 2px var(--black-op8);
        box-shadow: inset 1px 0px 2px 2px var(--black-op8);
        color: var(--black-op8);
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
        border: none;
        padding: 10px;
        font-size: 18px;
        &:focus {
          -webkit-box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
          box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
        }
      }
      textarea {
        -webkit-box-shadow: inset 1px 0px 2px 2px var(--black-op8);
        box-shadow: inset 1px 0px 2px 2px var(--black-op8);
        width: 100%;
        color: var(--black-op8);
        resize: none;
        border-radius: 5px;
        font-size: 1.8rem;
        padding: 5px;
        &:focus {
          -webkit-box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
          box-shadow: inset 1px 0px 2px 2px var(--blue-up3);
        }
      }
    }
    text-align: center;
    button {
      display: flex;
      color: var(--black-op8);
      cursor: pointer;
      border-radius: 4px;
      padding: 1rem;
      text-align: center;
      border: 1px solid var(--blue-up2);
      font-weight: bold;
      font-size: 1.8rem;
      .icon {
        fill: var(--black-op8);
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .formContain {
      width: 400px;
      form {
        gap: 0.5rem;
        label {
          font-size: 1.5rem;
          input {
            padding: 8px;
            font-size: 15px;
          }
          textarea {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .formContain {
      width: 330px;
      min-height: 100px;
      height: 440px;
      form {
        gap: 0rem;
        label {
          padding: 0.5rem;
        }
        input {
          padding: 5px;
          font-size: 10px;
        }
        .text {
          justify-content: center;
          padding: 0;
          font-size: 1.8rem;
        }
      }
    }
    .hidden {
      display: none;
    }
  }
`;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        REACT_APP_YOUR_SERVICE_ID,
        REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      user_email: Yup.string()
        .email('Invalid user_email address')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (values) {
        sendEmail();
        setSent(true);
      }
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <FormStyles>
      <div className="formContain">
        <h1 className="hidden">Envie um Email</h1>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <label htmlFor="user_name">
            <div className="text">
              <span>Nome:</span>
              <span>
                {formik.touched.user_name && formik.errors.user_name ? (
                  <div>{formik.errors.user_name}</div>
                ) : null}
              </span>
            </div>
            <input
              id="user_name"
              name="user_name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
            />
          </label>

          <label htmlFor="user_email">
            <div className="text">
              <span>Email:</span>
              <span>
                {formik.touched.user_email && formik.errors.user_email ? (
                  <div>{formik.errors.user_email}</div>
                ) : null}
              </span>
            </div>
            <input
              id="user_email"
              name="user_email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
            />
          </label>

          <label htmlFor="message">
            <div className="text">
              <span>Envie uma mensagem:</span>
              <span>
                {formik.touched.message && formik.errors.message ? (
                  <div>{formik.errors.message}</div>
                ) : null}
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="25"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="\..."
            />
          </label>

          <button type="submit" value="Send">
            {toggleElement(sent, 'Enviado', 'Enviar')}
            {toggleElement(
              sent,
              <FaCheckCircle className="icon" />,
              <FaAngleDoubleRight className="icon" />
            )}
          </button>
        </form>
      </div>
    </FormStyles>
  );
}
