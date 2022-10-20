import { useState, useEffect } from 'react'
import {
  changeUrl,
  convertBase64ToString,
  convertStringToBase64
} from '../services/changeURL'

export default function useDoc (data = '') {
  const [doc, setDoc] = useState('')

  useEffect(() => {
    try {
      const decoded = convertBase64ToString(data)

      setDoc(decoded)
    } catch (error) {
      setDoc('# Error: Invalid URL')
    }
  }, [])

  const changeDoc = (value) => {
    const encoded = convertStringToBase64(value)
    console.log(encoded)
    changeUrl(encoded)
    setDoc(value)
  }

  return { doc, changeDoc }
}
