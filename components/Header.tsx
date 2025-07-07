const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">42Law Austria</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
