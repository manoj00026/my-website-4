import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-800">Legal Support for Austrian Startups</h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Fixed-fee, digital-first legal services that move as fast as your startup.
      </p>
      <div className="mt-6">
        <Link
          href="/pricing"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 inline-block"
        >
          View Pricing
        </Link>
      </div>
    </div>
  )
}
