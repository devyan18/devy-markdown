import './App.css'
import MyEditor from './components/Editor'
import useDoc from './hooks/useDoc'

function App () {
  const { doc, changeDoc } = useDoc()

  return (
    <MyEditor doc={doc} onChange={changeDoc} />
  )
}

export default App
