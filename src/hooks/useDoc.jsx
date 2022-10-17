import { useState, useEffect } from 'react'
import { changeUrl, convertStringToBase64 } from '../services/changeURL'

export default function useDoc () {
  const [doc, setDoc] = useState('')

  useEffect(() => {
    const data = window.location.pathname.split('/')[1]

    if (!data) {
      const localStorageData = localStorage.getItem('doc')

      const decoded = window.atob(localStorageData)

      changeUrl(localStorageData)

      setDoc(decoded)
    }

    if (data) {
      try {
        const decoded = window.atob(data)

        setDoc(decoded)
      } catch (error) {
        setDoc('# Error: Invalid URL')
      }
    }
  }, [])

  const changeDoc = (value) => {
    localStorage.setItem('doc', convertStringToBase64(value))
    setDoc(value)
  }

  return { doc, changeDoc }
}
