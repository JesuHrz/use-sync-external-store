import React from 'react'
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector'

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports

// library code
const createStore = (initialState) => {
  let state = initialState
  const getState = () => state
  const listeners = new Set()

  const setState = (fn) => {
    state = fn(state)
    listeners.forEach((listener) => listener())
  }

  const subscribe = (listener) => {
    console.log('listener', listener)
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

const useStore = (store, selector) => {
  console.log('useStore')
  return useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getState,
    store.getState,
    selector
  )
}

// Application code
const store = createStore({ count: 0, text: 'hello' })

const Counter = () => {
  const count = useStore(store, (state) => state.count)

  const inc = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }))
  }

  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  )
}

export const ExternalWithUseSync = () => {
  console.log('ExternalWithUseSync')
  return (
    <div className='container'>
      <Counter />
      {/* <Counter /> */}
      {/* <TextBox />
      <TextBox /> */}
    </div>
  )
}
