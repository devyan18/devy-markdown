import MarkdownEditor from '@uiw/react-markdown-editor'
import { oneDark } from '@codemirror/theme-one-dark'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { convertBase64ToString } from '../services/changeURL'

export default function Preview () {
  const { doc } = useParams()
  const [value, setValue] = useState('# hello World')

  useEffect(() => {
    document.title = 'Devy + Preview'
    if (doc) {
      setValue(convertBase64ToString(doc))
    }
  }, [])

  return (
    <div className='container-body'>
      <MarkdownEditor.Markdown
        className='preview-container'
        style={{ height: 'calc(100vh - 40px)', marginTop: '40px' }}
        linkTarget='_blank'
        unwrapDisallowed={true}
        sanitize={true}
        spellCheck={false}
        theme={oneDark}
        source={value}
      />
    </div>
  )
}
