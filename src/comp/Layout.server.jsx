import { Suspense } from 'react';
import { useShopQuery, CacheLong, gql, Seo } from '@shopify/hydrogen';

import Header from './Header.client';
import Footer from './Footer.server';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header shop={shop} />

        <main role="main" id="mainContent" className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer shopName={shop.name} />
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query layout {
    shop {
      name
      description
    }
  }
`;
