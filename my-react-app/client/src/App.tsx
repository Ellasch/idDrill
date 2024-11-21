import { useState } from 'react'
import React from 'react'
import './App.css'
<<<<<<< HEAD:my-react-app/src/App.tsx
import PinInput from 'react-pin-input'
import { Button } from 'react-bootstrap'

=======
import React from 'react'
>>>>>>> 1ea8ef2104e92daf1bd91aa5d9d36517859259c6:my-react-app/client/src/App.tsx

function App() {
  const [digits, setDigits] = useState(0)

  return (
    <>
      <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <p style={{fontSize:40, fontWeight:'bold'}}>Enter the first 8 digits of your id</p>

        <PinInput 
          length={8}
          initialValue=""
          secret
          secretDelay={100} 
          onChange={(value, index) => {}} 
          type="numeric" 
          inputMode="number"
          style={{padding: '20px'}}  
          inputStyle={{borderColor: 'black'}}
          inputFocusStyle={{borderColor: 'purple'}}
          onComplete={(value, index) => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

        <Button variant='danger' 
          style={{marginTop:40, fontSize:30, color:'white', backgroundColor:'purple'}}
          >Send</Button>
        </div>
    </>


  )
}

export default App
