import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  min-height: 250px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  background: var(--black-2);
  border: 1px solid var(--blue-up2);
  border-radius: 8px 8px 0px 0px;
  justify-content: center;
  font-size: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 5rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="para">
      <p>Footer</p>
    </FooterStyles>
  );
}
