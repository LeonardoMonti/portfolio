import PropTypes from 'prop-types';
import React from 'react';
import { Container, ProjectInfo } from './style';

export default function ProjectItem({
  img = 'ProjectImg',
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <a href="#projects">
        <img src={img} alt="project img" />
      </a>
      <ProjectInfo
        initial={{ opacity: 0 }}
        whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        <p>{desc}</p>
      </ProjectInfo>
    </Container>
  );
}

ProjectItem.propTypes = {
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
