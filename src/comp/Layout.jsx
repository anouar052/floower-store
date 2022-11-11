import Nav from './Nav';

const Layout = ({ chidren }) => {
  return (
    <div>
      <Nav />
      {chidren}
    </div>
  );
};

export default Layout;
