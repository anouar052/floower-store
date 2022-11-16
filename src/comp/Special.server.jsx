import TwoCol from './TwoCol';

const Special = () => {
  return (
    <TwoCol
      title="What Special about Us"
      parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      button="Discover"
      image={'/assets/1.png'}
      reversed
      ImageWidth={'md:w-1/2 '}
    />
  );
};

export default Special;
