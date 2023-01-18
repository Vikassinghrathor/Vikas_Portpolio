import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio <br />
          Hi! I'm Vikas Software Developer .
        </SectionTitle>
        <SectionText>
        With a calm and focused demeanor, I am a technically proficient and analytical problem solver. Supported the company's business objectives and strategies while gaining real-world experience. Designing, maintaining and building the reusable, reliable and efficient Java  and Javascript code.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/vikas-rathore-51ba91194/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;