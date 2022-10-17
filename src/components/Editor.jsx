import MarkdownEditor from '@uiw/react-markdown-editor'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'

export default function MyEditor ({ doc, onChange }) {
  const myToolbars = ['header', 'bold', 'italic', 'link', 'strike', 'image', 'quote', 'olist', 'ulist', 'todo']

  return (
    <MarkdownEditor
      value={doc}
      height={'calc(100vh - 29px)'}
      onChange={onChange}
      extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
      theme={oneDark}
      spellCheck={false}
      autoFocus={true}
      toolbars={myToolbars}
      toolbarsMode={['preview']}
      previewProps={{
        unwrapDisallowed: true,
        sanitize: true,
        spellCheck: false
      }}
    />
  )
}
