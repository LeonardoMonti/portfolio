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
  }
  h2 {
    color: var(--white);
    font-family: 'Montserrat Bold';
    font-size: 7.5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-shadow: 3px 3px 2px var(--gray-1);
    transition: 0.5s;
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
