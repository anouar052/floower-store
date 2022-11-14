import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from '@shopify/hydrogen';
import { Suspense } from 'react';
import '@fontsource/pinyon-script';
import { Layout } from './comp/Layout.server';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProvider>
          <Router>
            <Layout>
              <FileRoutes />
            </Layout>
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
