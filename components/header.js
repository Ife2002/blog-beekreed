import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl font-sans font-bold md:text-4xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Beekreed
      </Link>
      .
    </h2>
  )
}
