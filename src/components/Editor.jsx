import MarkdownEditor from '@uiw/react-markdown-editor'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'
import Modal from './Modal'
import useModal from '../hooks/useModal'

export default function MyEditor ({ doc, onChange }) {
  const { isOpen, openModal, closeModal } = useModal()

  const shared = {
    name: 'shared',
    keyCommand: 'shared',
    button: { 'aria-label': 'Shared link' },
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" fill='currentColor'><path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"/></svg>
    ),
    execute: () => {
      openModal()
    }
  }

  const myToolbars = ['header', 'bold', 'italic', 'link', 'strike', 'image', 'quote', 'olist', 'ulist', 'todo']

  return (
    <>
      {
        isOpen && <Modal closeModal={closeModal} />
      }
      <MarkdownEditor
        value={doc}
        height={'calc(100vh - 29px)'}
        onChange={onChange}
        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
        theme={oneDark}
        spellCheck={false}
        autoFocus={true}
        visible={true}
        enableScroll={true}
        toolbars={myToolbars}
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
