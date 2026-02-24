import React from 'react'
import Card from "./components/Card"
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
       <Navbar/>
      <Card/>
      <Navbar/>
      
    </div>
  )
}
// in above code we calling the multiples components 
//they must be call inside the div bcz function return the only one value 
// note that after the calling you must be import the file of  the components
export default App
