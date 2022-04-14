import React from 'react';
import styled from 'styled-components';
import SkillsSection from './SkillsSection';
import SectionTitle from './SectionTitle';

const AboutSectionStyle = styled.div`
  padding: 3rem 0;
  min-height: 800px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .about__all {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
    flex-direction: column;
  }
  .about {
    display: flex;
    gap: 3rem;
    max-width: 1200px;
    flex-direction: column;
  }
  .description {
    font-size: 2rem;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 2px 5px 10px var(--black-op);
  }

  @media only screen and (max-width: 768px) {
    .about {
      max-width: 340px;
    }
    .description {
      letter-spacing: 0.3px;
      text-shadow: 1px 1px 5px var(--black-op);
    }
  }
`;

export default function ProjectsSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <SectionTitle subheading="" heading="Sobre" />
        <div className="about__all">
          <section className="about">
            <p className="description">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in ...
            </p>

            <SkillsSection />
          </section>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
