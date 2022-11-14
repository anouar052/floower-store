import {
  useProductOptions,
  BuyNowButton,
  AddToCartButton,
} from '@shopify/hydrogen';

export default function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        type="button"
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
        className="inline-block transition-all hover:bg-black  hover:text-white rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none border w-full  "
      >
        <span>{isOutOfStock ? 'Sold out' : 'Add to cart'}</span>
      </AddToCartButton>
      {isOutOfStock ? (
        <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
          Available in 2-3 weeks
        </span>
      ) : (
        <BuyNowButton
          variantId={selectedVariant.id}
          className="bg-brand-400  hover:bg-black hover:text-white transition-all text-black inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none  w-full"
        >
          <span>Buy it now</span>
        </BuyNowButton>
      )}
    </>
  );
}
