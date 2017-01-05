import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-bootstrap';
export class AboutMe extends Component {
  render() {
    return (
      <Grid fluid className="about-me">
        <Row>
          <Col sm={12}>
            <h2>About me</h2>
            <div className="about-me-texte">
              <p>I am a graduated French engineer since September 2015 from ISEN Toulon, a French engineering school. I studied software and electronic engineering with a mechatronics specialization.</p>
              <p>My studies gave me the opportunities to have an overview on software and electronic engineering.
              I had the opportunities to start my career in the web domain and I am willing to improve what I already learned.</p>
              <p>In my mind, innovation is the key of the success, and a world of opportunities is given to us. Then, I am keen on working in those industries, both on a national level or international level.</p>
              <p>I want to use the knowledge I earned during my studies and enhance the tomorrow&acute;s technologies.</p>
              <p>I am also interested in the human sciences and would like to complete my professional background by a MBA.</p>
            </div>
          </Col>
          <Col sm={12} className="center">
            <button className="btn btn-default btn-lg btn-rbt">Get in Touch</button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
