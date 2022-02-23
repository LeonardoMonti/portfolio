import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem 0;
  background-image: linear-gradient(
    to left,
    #181a1d,
    #181a1d,
    #181a1d,
    #181a1d,
    #181a1d,
    #171b21,
    #151b25,
    #131c29,
    #0e1d32,
    #091e3b,
    #061e44,
    #051e4c
  );
  border-bottom: 2px solid var(--blue-up1);

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.5s;
      border-bottom: 1px solid transparent;
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      text-decoration: overline var(--blue-up1);
      color: var(--white);
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .nav-handle {
    transition-property: translateY;
    transition-duration: 3s;
    transform: translateY(calc(-1 * var(--nav-height)));
    li {
      a {
        transition-property: padding, font-size;
        transition-duration: 1s, 1.9s;
        padding: 0;
        font-size: 0;
      }
    }
  }
  .nav-handle2 {
    li {
      a {
        transition-property: padding, font-size, opacity;
        transition-duration: 1s, 1.9s;
        padding: 1rem 2rem;
        font-size: 2rem;
        animation: fadein 2s;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      border-left: 1px solid var(--blue-up1);
      border-bottom: 1px solid var(--blue-up1);
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  let lastScrollY = window.scrollY;
  function handleScroll() {
    const navUl = document.querySelector('.navItems');
    if (lastScrollY < window.scrollY) {
      navUl.classList.add('nav-handle');
      navUl.classList.remove('nav-handle2');
    } else {
      navUl.classList.add('nav-handle2');
      navUl.classList.remove('nav-handle');
    }
    lastScrollY = window.scrollY;
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}
