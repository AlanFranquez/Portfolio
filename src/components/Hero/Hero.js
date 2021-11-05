import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a <br />
        mi Portfolio Personal
      </SectionTitle>

      <SectionText>
        Soy un desarollador Front End y estudiante de diseño UX/UI. Apasionado por los interfaces minimalistas y siempre intentando brindarle al usuario la mejor experiencia posible.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Lee más</Button>
    </LeftSection>
  </Section>
);

export default Hero;