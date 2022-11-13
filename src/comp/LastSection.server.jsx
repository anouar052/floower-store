const LastSection = () => {
  return (
    <section className="flex flex-col w-full mb-32 lg:h-screen md:h-[60vh] h-screen py-20 gap-4 items-center relative  ">
      <h2 className="text-4xl text-center lg:text-6xl  text-brand-500 font-pinyon z-20">
        Enjoy your flowers, For a Really long time Now
      </h2>
      <p className="lg:text-lg text-sm  font-poppins opacity-70 md:w-2/3 w-4/5 text-center z-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto
        rerum doloremque beatae doloribus corporis eligendi laudantium debitis
        commodi ea odit quam, quo voluptates, nihil sapiente dignissimos aliquid
        mollitia deleniti!
      </p>
      <button className="bg-brand-400 font-poppins py-1.5 px-2 w-1/2  md:w-1/6 text-md font-semibold z-20">
        Shop now
      </button>
      <img
        className="absolute md:w-1/4 w-1/2 lg:-bottom-7 md:bottom-10 bottom-40  right-0 z-10"
        src="../src/assets/4RN.png"
        alt=""
      />
      <img
        className="absolute md:w-1/3 w-2/3 lg:-bottom-[13em] bottom-0 left-0 -z-1"
        src="../src/assets/4RN-1.png"
        alt=""
      />
    </section>
  );
};

export default LastSection;
