import { useState, useEffect } from 'react'
import getShorterUrl from '../services/getShorterUrl'

export default function useShorterLinks () {
  const [loading, setLoading] = useState(true)
  const [copiedEditor, setCopiedEditor] = useState(false)
  const [copiedPreview, setCopiedPreview] = useState(false)

  const [linkEditor, setLinkEditor] = useState('')
  const [linkPreview, setLinkPreview] = useState('')

  const [error, setError] = useState(false)

  const host = `${window.location.protocol}//${window.location.host}`

  useEffect(() => {
    const doc = window.location.pathname.split('/')[1]

    const editorUrl = `${host}/${doc}`
    const previewUrl = `${host}/${doc}/preview`

    Promise.all([getShorterUrl(editorUrl), getShorterUrl(previewUrl)])
      .then(([editor, preview]) => {
        setLinkEditor(`https://devy-punter.netlify.app/${editor.url}`)
        setLinkPreview(`https://devy-punter.netlify.app/${preview.url}`)
      })
      .catch((_err) => {
        setError(true)
      })
      .finally(() => { setLoading(false) })
  }, [])

  return [
    error,
    loading,
    copiedEditor,
    copiedPreview,
    linkEditor,
    linkPreview,
    setCopiedEditor,
    setCopiedPreview
  ]
}
