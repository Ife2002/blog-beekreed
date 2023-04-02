import PostPlug from './post-plug'

export default function MoreStories({ posts }) {
  return (
    <section className='bg-black '>
      <h2 className="mb-8 text-white font-sans font-normal text-[2rem] tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 ">
        {posts.map((post) => (
          <PostPlug
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
