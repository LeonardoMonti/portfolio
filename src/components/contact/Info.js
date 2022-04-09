import React from 'react';
import styled from 'styled-components';

const InfoStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: var(--blue-up4);
  border-radius: 12px;
  border: 1px solid var(--gray-5);
  gap: 1.5rem;
  font-size: 1.5rem;
  padding: 10px;
  a {
    width: 55px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 8px;
    a {
      width: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      width: 30px;
    }
  }
`;

export default function Info({ icon, content, direct }) {
  return (
    <InfoStyles>
      <a href={direct} target="_blank" rel="noreferrer">
        {icon}
      </a>
      <h3>{content}</h3>
    </InfoStyles>
  );
}
