import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import NavBar from './component/NavBar'
import MainSection from './component/MainSection'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=' border-2 border-red-500'>
      <Header />
      <NavBar />
      <MainSection />
    </div>
    
  )
}

export default App
