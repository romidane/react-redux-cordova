import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { EXAMPLE_PAGE } from '../../constants/routes';

export default () => (
  <nav className="c-main-navigation">
    <ul className="o-list">
      <li className="o-list__item">
        <NavLink className="c-nav-link" to="/" exact>
          Dashboard
        </NavLink>
      </li>
      <li className="o-list__item">
        <NavLink className="c-nav-link" to={EXAMPLE_PAGE} exact>
          Example page
        </NavLink>
      </li>
    </ul>
  </nav>
);
