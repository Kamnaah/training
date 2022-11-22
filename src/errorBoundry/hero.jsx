import React from 'react'

function Hero({heroName}) {
  if(heroName==="joker"){
    throw new Error('not a hero!')
  }
  return (
    <div><h1>-----------------Error Boundary------------------</h1>
    <h2>{heroName}</h2></div>
  )
}

export default Hero