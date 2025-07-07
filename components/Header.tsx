import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">42Law Austria</h1>
        <nav className="space-x-4">
          <Link href="/" passHref>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">About</span>
          </Link>
          <Link href="/pricing" passHref>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Pricing</span>
          </Link>
          <Link href="/services" passHref>
            <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Services</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
