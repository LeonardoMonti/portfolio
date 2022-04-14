import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  height: 800px;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 7rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    border: 1px solid var(--blue-up1);
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--white);
    font-weight: 700;
    text-shadow: 1px 2px 2px var(--black-op6);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--blue-up1);
    border-radius: 8px;
    :active {
      transform: translateY(52%);
      text-shadow: 1px 1px 2px var(--black-op6);
    }
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 9rem 0;
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 0.15rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="Projetos Desenvolvidos" heading="Projetos" />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              // quando a largura da janela é >= 640px
              640: {
                slidesPerView: 1,
              },
              // quando a largura da janela é >= 768px
              768: {
                slidesPerView: 2,
              },
              // quando a largura da janela é >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
