import React, { useCallback } from 'react'
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector'
import { createStore } from './store'

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports

const store = createStore({ count: 0, text: 'hello' })

const useStore = (store, selector) => {
  return useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getState,
    store.getState,
    selector
  )
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

export const ExternalWithUseSync = () => {
  console.log('ExternalWithUseSync')
  return (
    <div className='container'>
      <Counter />
      {/* <Counter /> */}
    </div>
  )
}
