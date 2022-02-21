import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: var(--black-op6);
    padding: 0.7em 2em;
    border: 2px solid var(--blue-up2);
    border-radius: 8px;
    text-shadow: 1px 1px 2px black;
    display: inline-block;
    color: var(--gray-1);
    transition: all 1s ease-out;
  }
  .button:hover {
    color: var(--white);
    border: 2px solid var(--blue-up1);
    background-color: var(--black-op8);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.9rem;
      background-color: var(--black-op8);
    }
  }
`;

export default function Button({ btnText = 'test', btnLink = 'test' }) {
  return (
    <ButtonStyle className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
