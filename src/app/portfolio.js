import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-bootstrap';

export class Portfolio extends Component {
  render() {
    return (
      <Grid fluid className="portfolio fullpage">
        <Row>
          <div className="section">
            <h2>Portfolio</h2>
            <div className="portfolio-texte">
              <p>After my studies in ISEN, I started my career directly in the web development participating to different projects.</p>
              <p>Self made man, I am keen on learning new technologies and improve my skills in the ones I already know.</p>
              <p>This website is born during  my practicing of ReactJS, the famous library made b Facebook.</p>
              <p>Here are some examples of my work. Don&acute;t hesitate to get in touch for further informations or visit my LinkedIn.</p>
            </div>
          </div>
        </Row>
        <Row>
          <Col sm={12} md={6} className="experience">
            mon-enfant.fr
          </Col>
          <Col sm={12} md={6} className="experience">
            arpa.fr
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} className="experience">
            clea
          </Col>
        </Row>
      </Grid>
    );
  }
}
