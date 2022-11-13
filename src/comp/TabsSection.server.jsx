import { Suspense } from 'react';
import TabsCards from './TabsCards.server';

const TabsSection = ({ collections }) => {
  return (
    <Suspense>
      <section className="w-full h-screen flex justify-center items-center flex-col">
        <TabsCards collections={collections} />
      </section>
    </Suspense>
  );
};

export default TabsSection;
