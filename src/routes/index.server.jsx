import Hero from '../comp/Hero.server';
import LastSection from '../comp/LastSection.server';
import Special from '../comp/Special.server';
import TabsSection from '../comp/TabsSection.server';
import { useShopQuery, gql } from '@shopify/hydrogen';
import Categories from '../comp/Categories.client';
import { Layout } from '../comp/Layout.server';
import Features from '../comp/Features.server';

export default function Home() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
  });
  return (
    <>
      {/* <Layout> */}
      <Hero />
      <Categories collections={collections.nodes} />
      <Special />
      <LastSection />
      {/* <TabsSection collections={collections.nodes} /> */}
      {/* </Layout> */}
    </>
  );
}
const QUERY = gql`
  query collections {
    collections(first: 10) {
      nodes {
        id
        title
        handle
        image {
          url
        }
      }
    }
  }
`;
