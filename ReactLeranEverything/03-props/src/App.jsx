import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'> 
     
      <Card user='shizuka' age='21' img='https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Doorman ' age='12' img='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Nobita'  age='18' img='https://media.istockphoto.com/id/2150988877/photo/professional-man-working-on-laptop-in-modern-office.jpg?s=2048x2048&w=is&k=20&c=XHngIr8yzHIavPB_CN3E9FOOwJlPstH-j1qbMlu0jtc='/>
      
      
    </div>
  )
}
//<Card/> <Card/><Card/> this multiple time it will print the similar data but change the inside the data we use the props  
// In the above while calling the card we passing the parameter are like username , age and sperate imag for the user
      
      
      

export default App
