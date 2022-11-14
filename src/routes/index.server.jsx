import Hero from '../comp/Hero.server';
import LastSection from '../comp/LastSection.server';
import Special from '../comp/Special.server';
import TabsSection from '../comp/TabsSection.server';
import { useShopQuery, gql } from '@shopify/hydrogen';
import Categories from '../comp/Categories.client';
import { Layout } from '../comp/Layout.server';

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
      <Special />
      <Categories collections={collections.nodes} />
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
