import './App.css'
import { useEffect } from 'react'
import MyEditor from './components/Editor'
import useDoc from './hooks/useDoc'
import { changeUrl, convertStringToBase64 } from './services/changeURL'
import { useParams } from 'react-router-dom'

function App () {
  const { doc: initialDocs } = useParams()
  const { doc, changeDoc } = useDoc(initialDocs)

  useEffect(() => {
    const newUrl = convertStringToBase64(doc)

    changeUrl(newUrl)
  }, [doc])

  return (
    <MyEditor doc={doc} onChange={changeDoc} />
  )
}

export default App
