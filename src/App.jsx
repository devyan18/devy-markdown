import "./App.css";
import MyEditor from "./Editor";
import { useState } from 'react'

function App() {

  const [doc, setDoc] = useState('')

  return (
    <MyEditor doc={doc} onChange={setDoc} />
  );
}

export default App;
