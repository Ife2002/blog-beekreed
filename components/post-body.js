import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content }) {
  return (
    <div className={`max-w-2xl font-sans mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content} />
    </div>
  )
}
