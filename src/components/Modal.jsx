import { useEffect, useState } from 'react'

export default function Modal ({
  closeModal
}) {
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const [link, setLink] = useState('')

  useEffect(() => {
    const doc = window.location.pathname.split('/')[1]

    const url = `https://devy-markdown.netlify.app/${doc}`

    fetch('https://devy-redirect-production.up.railway.app/api/punter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url

      })
    })
      .then((response) => response.json())
      .then((data) => {
        setLink(`https://devy-punter.netlify.app/${data.url}`)
      })
      .finally(() => { setLoading(false) })
  }, [])

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
  }

  return (
    <div
      className={'back-modal'}
      onClick={e => {
        closeModal()
      }}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        {
          loading
            ? <h2>Loading...</h2>
            : (
                <>
                  <button onClick={handleCopyToClipboard}>Copiar Link</button>
                  {copied && <p>✅ copied</p>}
                </>
              )
        }
      </div>
    </div>
  )
}
