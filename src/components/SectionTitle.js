import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    text-shadow: 1px 1px 2px var(--gray-1);
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    padding: 7px;
    color: var(--white);
    /* transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg); */
  }
  h2 {
    color: var(--white);
    font-family: 'Montserrat Bold';
    font-size: 7.2rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-shadow: 3px 3px 2px var(--gray-1);
    /* transform: rotateX(0deg) rotateY(0deg) rotateZ(356deg); */
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 4rem;
      text-shadow: 2px 2px 1px var(--gray-1);
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
