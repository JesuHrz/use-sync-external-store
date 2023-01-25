import React, { useState, useEffect, useCallback } from 'react'

import { createStore } from './store'

const store = createStore({ count: 0, text: 'hello' })

const useStore = (store, selector) => {
  const [state, setState] = useState(() => selector(store.getState()))

  useEffect(() => {
    const callback = () => setState(selector(store.getState()))
    const unsubscribe = store.subscribe(callback)
    // callback()
    return unsubscribe
  }, [store, selector])

  return state
}

const Counter = () => {
  const count = useStore(store, useCallback((state) => state.count, []))

  const inc = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }))
  }

  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  )
}

// const TextBox = () => {
//   const text = useStore(store, useCallback((state) => state.text, []))

//   const setText = (event) => {
//     store.setState((prev) => ({ ...prev, text: event.target.value }))
//   }
//   return (
//     <div>
//       <input value={text} onChange={setText} className='full-width' />
//     </div>
//   )
// }

export const ExternalFromScratch = () => {
  console.log('ExternalFromScratch')
  return (
    <div className='container'>
      <Counter />
      {/* <Counter /> */}
      {/* <TextBox /> */}
      {/* <TextBox /> */}
    </div>
  )
}
