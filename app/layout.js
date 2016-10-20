import React from "react";
import StaticContainer from 'react-static-container';
import Navigation from './components/navigation';
import Header from './components/header';

export default (props) => {
  return (
    <div className="o-main" id="layout">
      <Header />
      <Navigation />
      <div id="o-container">
        <StaticContainer key={Date.now()}>
          {props.children}
        </StaticContainer>
      </div>
    </div>
  );
}
