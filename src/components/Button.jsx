import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  .button {
    margin-top: 2rem;
    width: 300px;
    background-color: var(--blue-up4);
    border: 2px solid var(--blue-up2);
    height: 70px;
    border-radius: 8px;
    align-items: center;
    font-size: 2rem;
    text-shadow: 1px 1px 2px black;
    display: flex;
    justify-content: center;
    color: var(--gray-1);
    transition: all 1s ease-out;
  }
  .icon {
    width: 65%;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.9rem;
    }
    .button:hover {
      font-size: 1.65rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  icon = 'icon',
  btnLink = 'test',
}) {
  return (
    <ButtonStyle className="button-wrapper">
      <Link className="button" to={btnLink}>
        <span className="icon">{icon}</span>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

Button.propTypes = {
  btnLink: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

Button.defaultProps = {
  icon: <span>a</span>,
};
