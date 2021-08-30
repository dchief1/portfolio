import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Kelechi <br />
        Web Developer.
      </SectionTitle>
      <SectionText>
        Interactive Front-end Developer
      </SectionText>
      <Button onClick={() => window.location= 'mailto:igwesiemmanuel4@gmail.com'}>Let's talk</Button>
    </LeftSection>
  </Section>
);

export default Hero;