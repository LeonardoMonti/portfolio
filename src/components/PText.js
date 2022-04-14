import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 2.5rem;
  line-height: 3.2rem;
  text-shadow: 2px 5px 10px var(--black-op);
  z-index: 5;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 5rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
