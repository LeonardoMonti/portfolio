import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';
import * as Yup from 'yup';

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
      border-radius: 4px;
      padding: 1rem;
      text-align: center;
      border: none;
      font-weight: bold;
      font-size: 1.8rem;
      .icon {
        fill: var(--black-op8);
      }
      &:disabled {
        fill: red;
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
      min-height: 400px;
    }
  }
`;

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });
  return (
    <FormStyles>
      <div className="formContain">
        <h1>Envie um Email</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">
            <div className="text">
              <span>Nome:</span>
              <span>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </span>
            </div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              placeholder="Informe seu nome"
            />
          </label>

          <label htmlFor="email">
            <div className="text">
              <span>Email:</span>
              <span>
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </span>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Informe seu email"
            />
          </label>

          <label htmlFor="message">
            <div className="text">
              <span>Message:</span>
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
              placeholder="text.."
            />
          </label>

          <button type="submit">
            Enviar
            <FaAngleDoubleRight className="icon" />
          </button>
        </form>
      </div>
    </FormStyles>
  );
}
