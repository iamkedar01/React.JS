
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render( <App /> ) // app is noting but calling useing the jsx method which is similar to the App()
// this also the way to write  useing the ReactDOM crateing a root and useing the document and rendering the the App componet

// the below is perfred bcz we can render the multiple comopnets useing the 
ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />
// Here always maintain the React in the stric mode only 
)

// To get the below code short cut is the  rafce ( this the react arrow function shortcut)
// import React from 'react'

// const main = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default main
