import React from 'react'

function Child({greetHandler}) {
  return (
    <div>
      <button onClick={()=>greetHandler("child")}>Greet Parent</button>
    </div>
  )
}

export default Child