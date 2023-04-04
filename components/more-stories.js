import PostPlug from './post-plug'

export default function MoreStories({ posts }) {
  return (
    <section className='bg-black '>
      <h2 className=" text-white font-sans font-normal text-[1.8rem] tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="mt-3 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
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
