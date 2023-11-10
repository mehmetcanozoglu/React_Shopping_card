import React, { useState } from 'react'
import Headers from './component/Header'
import Products from './component/Products'
import Card from './component/Card'

export default function App() {
  let [cart,setcart] =useState([])
 
  let emtyCart = () =>{
    setcart([])
  }

  return (
    <div>
      <Headers cart={cart}/> 
      <Products  cart={cart} setcart={setcart}/>
      <Card cart={cart} setcart={setcart} emtyCart={emtyCart}/>
    </div>
  )
}
