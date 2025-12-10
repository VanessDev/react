import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import WithXSS from './pages/Secure'
import Without from './pages/Vulnerable'
import MainLayout from './components/Layout/MainLayout'
import Exo1 from './pages/Exo1'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ < MainLayout /> }>
            <Route path='/' element={ < Home /> }/>
            <Route path='/with' element={ < WithXSS /> }/>
            <Route path='/without' element={< Without />}/>
             <Route path='/exo1' element={< Exo1 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
