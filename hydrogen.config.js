import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: import.meta.env.PUBLIC_STORE_DOMAIN,
    storefrontToken: import.meta.env.PUBLIC_STOREFRONT_TOKEN,
    // storefrontToken: '4c05ec4e786e07a745203b7f7af02bba',
    storefrontApiVersion: '2022-07',
  },
});
