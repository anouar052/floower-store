import {
  useRouteParams,
  useShopQuery,
  gql,
  Link,
  Image,
} from '@shopify/hydrogen';
import { Suspense } from 'react';

export default function Collection() {
  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });

  const products = collection?.products.nodes;

  return (
    <section className="p-6 md:p-8 lg:px-20">
      <Suspense>
        <h2 className="relative  text-5xl text-center md:text-left lg:text-7xl mb-20 z-30 font-bold underline decoration-brand-400 decoration-8">
          {collection.title}
        </h2>
        <div className="flex w-full h-auto justify-evenly gap-8  items-center flex-wrap  ">
          {products?.map((product) => {
            return (
              <Link
                className="flex gap-4 flex-col  justify-center  max-w-1/2 items-center "
                to={`/products/${product.handle}`}
              >
                {product.featuredImage ? (
                  <Image
                    loaderOptions={{
                      crop: 'center',
                      scale: 2,
                      width: 320,
                      height: 400,
                    }}
                    className=" rounded-lg aspect-4/5  "
                    alt="product image"
                    width={350}
                    height={430}
                    data={product.featuredImage}
                  />
                ) : null}
                <h4 className="font-bold mb-8 text-2xl">{product.title}</h4>
              </Link>
            );
          })}
        </div>
      </Suspense>
    </section>
  );
}

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      products(first: 10) {
        nodes {
          id
          title
          handle
          featuredImage {
            url
          }
        }
      }
    }
  }
`;
