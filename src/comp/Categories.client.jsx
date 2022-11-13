import { Image, Link } from '@shopify/hydrogen';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper';

const Categories = ({ collections }) => {
  return (
    <section className="w-full min-h-[100vh] flex flex-col justify-center px-8  md:px-20 lg:px-16">
      <h2 className="relative  text-5xl text-center md:text-left lg:text-7xl mb-20 z-30 font-bold underline decoration-brand-400 decoration-8">
        CATEGORIES
      </h2>
      <Swiper
        navigation
        modules={[Navigation, Pagination, Scrollbar, Keyboard, Mousewheel]}
        pagination={{ clickable: true }}
        spaceBetween={5}
        className="w-full min-h-[55vh] md:min-h-auto "
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 1048px
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 1400px
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        keyboard={true}
      >
        {collections.map((collection) => {
          return (
            <SwiperSlide key={collection.id}>
              <Link
                className="flex gap-4 flex-col justify-center  max-w-1/2 items-center "
                to={`/collections/${collection.handle}`}
              >
                {collection.image ? (
                  <Image
                    className=" rounded-lg  aspect-4/5 "
                    alt="collection image"
                    data={collection.image}
                    widths={[320]}
                    sizes="320px"
                    loaderOptions={{
                      crop: 'center',
                      scale: 1,
                      width: 320,
                      height: 400,
                    }}
                  />
                ) : null}
                <h4 className="font-bold mb-8 text-2xl">{collection.title}</h4>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Categories;
