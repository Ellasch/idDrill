import React from 'react'
import { useState } from 'react'
import './App.css'
import PinInput from 'react-pin-input'
import { Button } from 'react-bootstrap'



function App() {
  const [digits, setDigits] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center', marginTop:'20vh'}}>
        <p style={{fontSize:40, fontWeight:'bold'}}>Enter the first 8 digits of your id</p>

        <PinInput 
          length={8}
          initialValue=""
          onChange={(value, index) => {setDigits(value)}} 
          type="numeric" 
          inputMode="number"
          style={{padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}  
          inputStyle={{borderColor: 'black'}}
          inputFocusStyle={{borderColor: 'purple'}}
          onComplete={(value, index) => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

        <Button 
        style={{fontSize: 30, marginTop:20
          ,borderRadius:10, padding: '10px 20px', color: 'pink', borderColor: 'pink'}}
           id='send_btn'
           onClick={() => {setClicked((prev) => !prev)}}
          disabled={digits.length !== 8}
           >Send</Button>

         {
          clicked ? 
          <p 
            style={{fontSize:30, fontWeight:'bold', marginTop:20}}
            >Your last digit is: {digits}
          </p>
           : null
         }
        </div>
  )
}

export default App
