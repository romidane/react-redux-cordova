import React, { Component } from 'react';
import { Link } from "react-router";
import { EXAMPLE_PAGE } from '../../constants/routes';

export default () => (
  <nav className="c-main-navigation">
    <ul className="o-list-bare">
      <li>
        <Link to={EXAMPLE_PAGE}>Some Link</Link>
      </li>
    </ul>
  </nav>
)
