import React from 'react'

export default function HomeComponent(props) {
    console.log("Home Component Props", props)
  return (
    <div>
        <h2>HomeComponent</h2>
        <p>Name : {props.obj.personalDetails.name}</p>
        <p>Age : {props.obj.personalDetails.age}</p>
        <button onClick={() => props.setName("Ramesh Jena")}>Set Name To Ramesh</button>
    </div>
  )
}


