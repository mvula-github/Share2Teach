import './App.css'
import Contribute from './Pages/Contribute'
import Contributors from './Pages/Landing/Contributors'
import FAQ from './Pages/Landing/FAQ'
import Landing from './Pages/Landing/Landing'

function App() {

  return (
    <>
      <div className='app-container'>
        <Landing />
        {/*<Contributors />*/}
        {/*<FAQ />*/}
        <Contribute />

      </div>
    </>
  )
}

export default App
