export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl text-white md:text-7xl font-sans lg:text-[4rem] font-semibold tracking-tighter leading-tight md:leading-none mb-6 text-left md:text-left">
      {children}
    </h1>
  )
}
