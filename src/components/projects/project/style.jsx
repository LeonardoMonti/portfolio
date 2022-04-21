import styled from 'styled-components';
// import { motion } from 'framer-motion'; possivel erro de importação
import { motion } from 'framer-motion/dist/framer-motion';

export const Container = styled(motion.section)`
  @media only screen and (max-width: 768px) {
      padding: 10px;
    }

  a {
    width: 95%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    display: inline-block;
    border: 2px solid var(--blue-up2);

    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    img {
      height: 100%;
    }
  }
`;

export const ProjectInfo = styled(motion.div)`
  width: 100%;
  height: 120px;
  margin-top: 0.8rem;
  background-color: var(--black-op6);
  border: 2px solid var(--blue-up2);
  border-radius: 8px;
  padding: 1rem;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1.2rem;
  }
`;
