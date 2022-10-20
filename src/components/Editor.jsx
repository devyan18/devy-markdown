import MarkdownEditor from '@uiw/react-markdown-editor'
import {
  markdown,
  markdownLanguage
} from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'
import Modal from './Modal'
import useModal from '../hooks/useModal'
import Shared from '../icons/Shared'

export default function MyEditor ({ doc, onChange }) {
  const { isOpen, openModal, closeModal } = useModal()

  const shared = {
    name: 'shared',
    keyCommand: 'shared',
    button: { 'aria-label': 'Shared link' },
    icon: <Shared />,
    execute: () => {
      openModal()
    }
  }

  return (
    <>
      {
        isOpen && <Modal closeModal={closeModal} />
      }
      <MarkdownEditor
        value={doc}
        height={'calc(100vh - 29px)'}
        onChange={onChange}
        extensions={[markdown({
          base: markdownLanguage,
          codeLanguages: languages
        })]}
        theme={oneDark}
        spellCheck={false}
        autoFocus={true}
        visible={true}
        enableScroll={true}
        toolbars={[
          'header',
          'bold',
          'italic',
          'link',
          'strike',
          'image',
          'quote',
          'olist',
          'ulist',
          'todo',
          'code',
          'codeBlock'
        ]}
        toolbarsMode={['preview', shared]}
        previewProps={{
          linkTarget: '_blank',
          unwrapDisallowed: true,
          sanitize: true,
          spellCheck: false
        }}
      />
    </>
  )
}
