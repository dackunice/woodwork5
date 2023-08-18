import { useEffect } from 'react'
import { DataProvider } from './AuthState'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Aos from 'aos'
import './App.css'

function App() {

  

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App