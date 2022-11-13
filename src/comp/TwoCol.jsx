import '@fontsource/poppins';

export default function TwoCol({
  title,
  parag,
  button,
  reversed,
  image,
  ImageWidth,
}) {
  return (
    <section
      className={`flex lg:min-h-screen flex-col-reverse md:flex-row items-center justify-center gap-8  bg-white w-full  ${
        reversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <img
        className={`${ImageWidth ? ImageWidth : 'w-10/12 md:w-5/12'}`}
        src={image}
        alt=""
      />

      <div className="flex  flex-3 justify-center text-center md:text-left md:items-start items-center flex-col gap-8 p-10   md:px-20 ">
        <h1 className="text-4xl lg:text-6xl  text-brand-500 font-pinyon ">
          {title}
        </h1>
        <p className="lg:text-lg text-sm  font-poppins opacity-70 ">{parag}</p>
        <button className="bg-brand-400 font-poppins py-1.5 px-2 w-1/2  lg:w-1/4 text-md font-semibold">
          {button}
        </button>
      </div>
    </section>
  );
}
