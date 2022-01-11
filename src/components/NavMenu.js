import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  return (
    <section>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </section>
  );
}
