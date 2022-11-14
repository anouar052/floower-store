import { MediaFile, useProductOptions, Image } from '@shopify/hydrogen';
import { useState } from 'react';

export default function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }
  const { selectedVariant } = useProductOptions();
  const [selectedImage, setSelectedImage] = useState(selectedVariant.image);

  return (
    <div className=" md:p-20 md:pr-0 ">
      <Image
        className={`w-full  aspect-square object-cover`}
        data={selectedImage}
        options={{
          crop: 'center',
        }}
      />

      <div className={`  flex-wrap md:p-0 w-full flex`}>
        {media.map((med, i) => {
          let extraProps = {};

          if (med.mediaContentType === 'MODEL_3D') {
            extraProps = {
              interactionPromptThreshold: '0',
              ar: true,
              loading: 'eager',
              disableZoom: true,
            };
          }

          const data = {
            ...med,
            image: {
              ...med.image,
              altText: med.alt || 'Product image',
            },
          };

          return (
            // <div
            //   className={`${
            //     med.image.url === selectedVariant.image.url
            //       ? 'md:col-span-5'
            //       : 'md:col-span-1'
            //   } snap-center card-image bg-white aspect-square md:w-1/2 w-[80vw] shadow-sm rounded`}
            //   key={med.id || med.image.id}
            // >
            // <div className="relative  max-w-fit  pointer-events-auto cursor-pointer">
            <MediaFile
              key={med.id || med.image.id}
              tabIndex="0"
              className={` w-1/6 aspect-square object-cover  cursor-pointer 
                `}
              data={data}
              options={{
                crop: 'center',
              }}
              {...extraProps}
              onClick={() => setSelectedImage(med.image)}
            />
          );
        })}
      </div>
    </div>
  );
}
