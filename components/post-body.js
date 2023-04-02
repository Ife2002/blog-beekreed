import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import Avatar from '../components/avatar'

export default function PostBody({ content, author }) {
  
  const myPortableTextComponents = {
    types: {
      image: ({value}) => <img src={value.imageUrl} />,
      callToAction: ({value, isInline}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }

  return (
    <div className={`max-w-2xl font-sans text-white mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content} components={myPortableTextComponents} />
      <div className='w-[100%] flex justify-center'>
        {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
    </div>
  )
}
