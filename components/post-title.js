export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl font-sans lg:text-[4rem] font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left md:text-left">
      {children}
    </h1>
  )
}
