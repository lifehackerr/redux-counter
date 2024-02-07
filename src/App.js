import React from 'react'
import "./App.css"
import {useDispatch, useSelector } from 'react-redux'
import { incNumber,decNumber } from './action'

const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div class="quantity">
        <button class="quantity__minus" title="Decrement" onClick={()=> dispatch(decNumber())}>-</button>
        <input name="quantity" type="text" class="quantity__input" value={myState}/>
        <button class="quantity__plus" title="Increment" onClick={()=> dispatch(incNumber())}>+</button>
      </div>
      
    </div>
  )
}

export default App