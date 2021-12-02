import AppProvider from './AppProvider'
import Display from './components/Display'
import Form from './components/Form'
import Header from './components/Header'

const App = () => {
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
