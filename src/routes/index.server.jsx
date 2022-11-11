import Hero from '../comp/Hero.server';
import LastSection from '../comp/LastSection.server';
import Special from '../comp/Special.server';

export default function Home() {
  return (
    <>
      <Hero />
      <Special />
      <LastSection />
    </>
  );
}
