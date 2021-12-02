import { useState } from 'react'
import AppProvider from './AppProvider'
import Display from './components/Display'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProvider>
      <Header />
      <main className="mg-page">
        <Form />
        <Display />
      </main>
    </AppProvider>
  )
}

export default App
