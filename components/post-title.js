export default function PostTitle({ children }) {
  return (
    <h1 className="text-[1.5rem] py-10 md:pr-16 md:py-16 xl:py-0 xl:pb-16 text-white md:text-7xl font-sans lg:text-[3.5rem] font-medium tracking-tighter leading-tight md:leading-none mb-6 text-left md:text-left">
      {children}
    </h1>
  )
}
