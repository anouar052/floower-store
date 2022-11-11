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
      className={`flex h-screen items-center justify-center gap-8  bg-white w-full ${
        reversed ? 'flex-row-reverse' : ''
      }`}
    >
      <img
        className={`${ImageWidth ? ImageWidth : 'w-5/12'}`}
        src={image}
        alt=""
      />

      <div className="flex  flex-3 justify-center flex-col gap-8 px-20 ">
        <h1 className="text-6xl  text-brand-500 font-pinyon ">{title}</h1>
        <p className="text-lg font-poppins opacity-70 ">{parag}</p>
        <button className="bg-brand-400 font-poppins py-1.5 px-3 w-1/4 text-md font-semibold">
          {button}
        </button>
      </div>
    </section>
  );
}
