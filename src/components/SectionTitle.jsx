import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    padding: 7px;
    color: var(--white);
  }
  h2 {
    color: var(--white);
    font-family: 'Montserrat Bold';
    font-size: 7.2rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1024px) {
    text-align: center;
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 6rem;
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p id={heading}>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};