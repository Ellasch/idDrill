
import { useState } from 'react'
import { PinInput } from 'react-input-pin-code';
import { Button } from 'react-bootstrap'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

function App() {
  const [digits, setDigits] = useState(new Array<string>(8).fill(""));
  const [lastDigit, setLastDigit] = useState(0);

  return (
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center', marginTop:'20vh'}}>
        <p style={{fontSize:40, fontWeight:'bold'}}>Enter the first 8 digits of your id</p>

         <PinInput 
         values={digits}
         onChange={(_value, _index, values) => setDigits(values)}
         type='number'
         borderColor='pink'
         placeholder=''
         size='lg'
         focusBorderColor='pink'
         >
         </PinInput>

        <Button 
        style={{fontSize: 30, marginTop:20
          ,borderRadius:10, padding: '10px 20px', color: 'pink', borderColor: 'pink'}}
           id='send_btn'
           onClick={async() => {
           try{
            setLastDigit((
              await axios.post(`${baseUrl}`,{digits})).data); 
           }catch(err){
            alert(`Error - ${err}`);
           }}}
          disabled={digits.every((digit) => digit !== "") ? false : true}
           >Send</Button>

         {
          lastDigit ? 
          <p 
            style={{fontSize:30, fontWeight:'bold', marginTop:20}}
            >Your last digit is: {lastDigit}
          </p>
           : null
         }
        </div>
  )
}


export default App
