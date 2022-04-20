import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import skills from '../assets/data/skills';

SwiperCore.use([Autoplay]);

const SkillsSectionStyle = styled.div`
  padding: 3rem 0;
  .skills__allSkills {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .titleSection {
    font-size: 2.6rem;
    text-align: center;
    text-shadow: 2px 5px 10px var(--black-op);
  }

  .swiper-container {
    padding: 1.8rem 1.8rem 0.7rem 1.8rem;
    width: 70%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    border-radius: 10px;
    background-color: var(--blue-up4);
    border-left: 3px solid var(--blue-up4);
    border-right: 3px solid var(--blue-up4);
  }

  .containerSlide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .imageSkill {
    width: 95px;
  }

  .nameSkill {
    text-align: center;
    min-width: 100px;
    font-size: 1.3rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .swiper-container {
      width: 90%;
    }
    .containerSlide {
      img {
        width: 80px;
      }
    }
    .nameSkill {
      text-align: center;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsSectionStyle>
      <h1 className="titleSection">Tecnologias</h1>
      <section className="skills__allSkills">
        <Swiper
          autoplay={{ delay: 2000 }}
          speed={1000}
          spaceBetween={30}
          slidesPerView={3}
          allowTouchMove
          loop
          breakpoints={{
            // quando a largura da janela é >= 640px
            640: {
              slidesPerView: 2,
            },
            // quando a largura da janela é >= 768px
            768: {
              slidesPerView: 5,
            },
            // quando a largura da janela é >= 1200px
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {skills.map(({ name, img }, i) => (
            <SwiperSlide key={`${name}_${i + 1}`} className="containerSlide">
              <img className="imageSkill" src={img} alt="icon-skills" />
              <h1 className="nameSkill">{name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </SkillsSectionStyle>
  );
}
