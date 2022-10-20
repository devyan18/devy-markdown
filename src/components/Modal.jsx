import useShorterLinks from '../hooks/useShorterLinks'

export default function Modal ({ closeModal }) {
  const [loading, copiedEditor, copiedPreview, linkEditor, linkPreview, setCopiedEditor, setCopiedPreview] = useShorterLinks()

  const handleCopyToClipboardEditor = () => {
    navigator.clipboard.writeText(linkEditor)
    setCopiedEditor(true)
  }

  const handleCopyToClipboardPreview = () => {
    navigator.clipboard.writeText(linkPreview)
    setCopiedPreview(true)
  }

  return (
    <div
      className={'back-modal'}
      onClick={closeModal}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        {
          loading
            ? <h2>Loading...</h2>
            : (
              <>
                <h2>Share</h2>
                <button onClick={handleCopyToClipboardEditor}>Copy Editor Link to Clipboard {copiedEditor && <span>✅</span>} </button>
                <button onClick={handleCopyToClipboardPreview}>Copy Preview Link to Clipboard {copiedPreview && <span>✅</span> } </button>
              </>
              )
        }
      </div>
    </div>
  )
}
