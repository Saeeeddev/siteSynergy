import React from 'react';
import Hero from '../website/Hero';
import HeroVideoDemo from '../website/HeroVideoDemo';
import CompanyLogos from '../website/CompanyLogos';
import EmptySection from '../website/SuitabilityLayer';
import DemoVideoSection from '../website/DemoVideoSection';
import CtaSection from '../website/CtaSection';
import DataToDecision from '../website/DataToDecision';


function Home() {
  return (
    <main>
        
      <Hero />
      <HeroVideoDemo />
      <CompanyLogos />
      <EmptySection />
      <DemoVideoSection />
      <DataToDecision />
      <CtaSection />

    </main>
  );
}

export default Home;
