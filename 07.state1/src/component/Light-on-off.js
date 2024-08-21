import { useState } from 'react';

const LightOnOff = () => {
    const [light, setLight] = useState(true);
    return(
        <>
            {light ? <h1 style={{color:'red'}}>전구ON</h1> : <h1 style={{color:'gray'}}>전구OFF</h1>}
            <button onClick={()=>{setLight(!light)}}>{light ? "끄기" : "켜기"}</button>          
            
        
        </>


    )
}

export default LightOnOff;