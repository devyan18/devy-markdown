import { useState, useEffect } from 'react'

export default function useDoc () {
  const [doc, setDoc] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('doc')
    if (data) {
      setDoc(data)
    }
  }, [])

  const changeDoc = (value) => {
    localStorage.setItem('doc', value)
    setDoc(value)
  }

  return { doc, changeDoc }
}
