import React from 'react';

import { Section, SectionText,  SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Kelechi <br />  
        Web Developer.
      </SectionTitle>
      <SectionText>
        Great team player with an eye for details.
      </SectionText>
      
      <Button onClick={() => window.location= 'mailto:igwesiemmanuel4@gmail.com'}>Let's talk</Button>
    </LeftSection>
  </Section>
);

export default Hero;