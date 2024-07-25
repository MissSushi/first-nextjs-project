const Nav = ({ children }) => {
  return (
    <>
      <header className="border border-gray-500 bg-gray-300 flex justify-center p-4">
        {children}
      </header>
    </>
  );
};

export default Nav;
