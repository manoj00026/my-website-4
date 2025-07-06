import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">42Law Austria</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
