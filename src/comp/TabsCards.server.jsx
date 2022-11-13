import Cards from './Cards.server';

const TabsCards = ({ collections }) => {
  const products = [];
  return (
    <>
      <ul className="flex gap-4">
        {collections.map((collection) => {
          return (
            <li
              className={`text-lg hover:text-brand-400 cursor-pointer  `}
              key={collection.id}
              value={collection.handle}
            >
              <a to="#">{collection.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TabsCards;
