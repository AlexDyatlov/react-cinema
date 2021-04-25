import React from 'react';

const styles = {
  span: {
    fontWeight: 'bold'
  }
}

function About(props) {
  return <div className="container">
    <div className="about__item">
      <p className="about__item-text">
        SPA приложение на <span style={styles.span}>ReactJs</span>
      </p>
    </div>
  </div>
}

export default About;
