import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css'; import projects from '../../../../assets/data/projects';
import ProjectItem from '../item/ProjectItem';
import Container from './style';

export default function ProjectsSection() {
  return (
    <Container id="projects">
      <h1>Projetos</h1>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
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
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
