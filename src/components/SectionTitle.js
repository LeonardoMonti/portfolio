import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    text-shadow: 1px 1px 8px var(--red-2);
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    color: var(--red-2);
  }
  h2 {
    font-family: 'Montserrat Bold';
    text-shadow: 1px 1px 10px var(--deep-dark-1);
    font-size: 7rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
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
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
