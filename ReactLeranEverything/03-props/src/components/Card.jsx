

/* const Card = () => {
  return (
     <div className="card">
        <img src="https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></img>
        <h1>Kedar dhage </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, autem?</p>
        <button>View Profile</button>
      </div>
      // this the whole card details and printinf the similar details evey time just in the App.jsx file call the card function or componets again it will give the similar details but you want to change the details inside  the card we use the props
  )
}

export default Card  */

import React from 'react'

const Card = (props) => { // the props will return the object that can acces useing the dot operation 
  // Note Take the argument in the calling type similar to the function 
  return (
     <div className="card">
        <img src={props.img} ></img>
        <h1> {props.user}  </h1> 
        
        <h3> The age of the {props.user} is: {props.age}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, autem?</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card

