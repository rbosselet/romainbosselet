import React, {Component} from 'react';
import {About} from './about';
import {Career} from './project';
import {Contact} from './contact';
import {Diploma} from './diploma';
import {Experience} from './experience';
import {SectionsContainer, Header, Footer} from 'react-fullpage';

export class Main extends Component {
  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['about', 'project', 'diploma', 'experience', 'contact'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true,
      activeClass: 'active',
      lazyloading: true
    };
    return (
      <div>
        <Header>
          <a href="#about" className="bold">ABOUT ME</a>
          <a href="#project" className="bold">PROJECT</a>
          <a href="#diploma" className="bold">DIPLOMA</a>
          <a href="#experience" className="bold">EXPERIENCE</a>
          <a href="#contact" className="bold">CONTACT</a>
        </Header>
        <Footer>
          <a href="https://fr.linkedin.com/pub/romain-bosselet/87/78/9b3">
            <img src="../img/linkedin.png" width="40px" height="33" border="0" alt="Voir le profil de Romain Bosselet sur LinkedIn"/>
          </a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <About/>
          <Career/>
          <Diploma/>
          <Experience/>
          <Contact/>
        </SectionsContainer>
      </div>
    );
  }
}
