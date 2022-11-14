import { ProductOptionsProvider } from '@shopify/hydrogen';
import ProductForm from './ProductForm.client';
import ProductGallery from './ProductGallery.client';

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-6  md:grid-cols-2 lg:grid-cols-2 md:w-4/5 md:mx-auto">
          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full">
            <div className="md:col-span-2 snap-center card-image aspect-square w-full  rounded">
              <ProductGallery media={product.media.nodes} />
            </div>
          </div>
          <div className="sticky  md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
            <div className="grid gap-2">
              <h1 className="text-6xl font-italiana  leading-10 whitespace-normal">
                {product.title}
              </h1>
              <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
                {product.vendor}
              </span>
            </div>
            <ProductForm product={product} />
            <div className="mt-8">
              <span className="text-lg font-bold font-poppins">
                Description:
              </span>
              <div
                className="prose  pt-2 text-black text-md"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </ProductOptionsProvider>
  );
}
