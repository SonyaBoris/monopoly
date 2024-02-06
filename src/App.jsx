import './App.css'
import Cubik from './components/Cubik'
import History from './components/History'
import Layout from './components/Layout'
import Players from './components/Players'

function App() {
  return (
    <div  className="wrapper">
      <h1>Монополия</h1>
      <div className="content">
        <Players />
        <Layout />
        <History />
      </div>
      <div>
        <Cubik />
      </div>

    </div>
  )
}

export default App
