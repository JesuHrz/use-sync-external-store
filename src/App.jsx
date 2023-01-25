// import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector'
// const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports

import { ExternalFromScratch } from './ExternalFromScratch'
import { ExternalWithUseSync } from './ExternalWithUseSync'

import './App.css'

function App () {
  return (
    <div className='App'>
      <ExternalWithUseSync />
    </div>
  )
}

export default App
