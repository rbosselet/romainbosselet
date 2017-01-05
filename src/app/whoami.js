import React, {Component} from 'react';
import {Col, Row, Grid} from 'react-bootstrap';
export class WhoAmI extends Component {
  render() {
    return (
      <Grid fluid className="whoami">
        <Row>
          <Col sm={4}>
            <div className="logo">
              <img src="/img/whoami.jpg"/>
            </div>
          </Col>
          <Col sm={8}>
            <h2>I&acute;m Romain Bosselet</h2>
            <h4>Front end web developer, keen on enhancing the world and working in NYC.</h4>
          </Col>
        </Row>
      </Grid>
    );
  }
}
