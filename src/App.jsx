import { ExternalFromScratch } from './ExternalFromScratch'
import { ExternalWithUseSync } from './ExternalWithUseSync'

import './App.css'

function App () {
  return (
    <div className='App'>
      <ExternalWithUseSync />
      {/* <ExternalFromScratch /> */}
    </div>
  )
}

export default App
