import React from 'react';
import { SwiperSlide } from 'swiper/react/swiper-react';
import { Autoplay, Navigation } from 'swiper';
import data from '../../../assets/data/skills';
import { Container, SkillsEl } from './style';

export default function ProjectsSection() {
  return (
    <Container id="about">
      <h1>Sobre</h1>
      <section>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry`s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in ...
        </p>
      </section>
      <h2>Tecnologias</h2>
      <SkillsEl
        autoplay={{ delay: 3000 }}
        speed={1000}
        spaceBetween={30}
        slidesPerView={3}
        allowTouchMove
        loop
        modules={[Autoplay, Navigation]}
        breakpoints={{
          // quando a largura da janela é >= 640px
          640: {
            spaceBetween: 10,
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
        {data.map(({ name, img }, i) => (
          <SwiperSlide key={`${name}_${i + 1}`}>
            <img src={img} alt="icon-skills" />
            <p>{name}</p>
          </SwiperSlide>
        ))}
      </SkillsEl>
    </Container>
  );
}
