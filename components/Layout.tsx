import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-blue-600 p-4 text-white">
        <Link href="/" className="font-bold text-xl">Giving Platform</Link>
        <span className="ml-6"><Link href="/grants" className="underline">Grants</Link></span>
      </nav>
      {children}
    </div>
  )
}