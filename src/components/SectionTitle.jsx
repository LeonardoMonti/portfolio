import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.h1`
  text-align: center;
  color: var(--white);
  font-family: 'Montserrat Bold';
  font-size: 7rem;
  text-transform: uppercase;
  margin-bottom: 5rem;

  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default function SectionTitle({
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      {heading}
    </SectionTitleStyle>
  );
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
};
