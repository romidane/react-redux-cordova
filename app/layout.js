import React from 'react';
import Navigation from './components/navigation';
import Header from './components/header';

export default props => {
  return (
    <div className="o-main" id="layout">
      <Header />
      <Navigation />
      <div className="o-container">{props.children}</div>
    </div>
  );
};
