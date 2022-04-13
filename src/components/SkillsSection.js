import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import SectionTitle from './SectionTitle';
import skills from '../assets/data/skills';

SwiperCore.use([Autoplay]);

const SkillsSectionStyle = styled.div`
  padding: 2rem;
  .skills__allSkills {
    display: flex;
    gap: 1rem;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .swiper-container {
    width: 1200px;
    max-width: 100%;
    border-left: 3px solid var(--blue-up4);
    border-right: 3px solid var(--blue-up4);
  }

  .containerSlide {
    display: flex;
    width: 180px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .imageSkill {
    width: 100px;
  }

  .nameSkill {
    text-align: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;

export default function SkillsSection() {
  return (
    <SkillsSectionStyle>
      <SectionTitle heading="Tecnologias" subheading="" />
      <section className="skills__allSkills">
        <Swiper
          autoplay={{ delay: 2000 }}
          speed={1000}
          spaceBetween={30}
          slidesPerView={2}
          allowTouchMove
          loop
          breakpoints={{
            // quando a largura da janela é >= 640px
            640: {
              slidesPerView: 2,
            },
            // quando a largura da janela é >= 768px
            768: {
              slidesPerView: 4,
            },
            // quando a largura da janela é >= 1200px
            1200: {
              slidesPerView: 7,
            },
          }}
        >
          {skills.map(({ name, img }) => (
            <SwiperSlide className="containerSlide">
              <img className="imageSkill" src={img} alt="icon-skills" />
              <h1 className="nameSkill">{name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </SkillsSectionStyle>
  );
}
