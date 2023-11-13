import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { puppyList } from './data.js'
import './App.css'

import {puppyList} from './data.js'
// import { useState } from 'react'
function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppies)

  return (
    <>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    
      { 
   puppies.map((puppy) => {
    const featuredPup = puppies.find((pup)=> pup.id === featPupId)
    return <p onClick={()=>{setFeatPupId("puppy id: ", puppy.id)}} key={puppy.id}>{puppy.name}</p>;
  })
}
    </>
  )
}

export default App
