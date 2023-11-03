import { useState } from 'react'
import '../../src/index.css'
const colors = [
    {
        hex: '#ff0000',
        name: 'Red'
    },
    {
        hex: ' #ff8000',
        name: 'Orange'
    },
    {
        hex: ' #ffff00',
        name: 'Yellow'
    },
    {
        hex: ' 	#00ff00',
        name: 'Green'
    },
    {
        hex: ' #00bfff',
        name: 'Blue'
    },
    {
        hex: ' #4b0082',
        name: 'Indigo'
    },
    {
        hex: ' #bf8bff',
        name: 'Violet'
    }
]



function Colors() {
    const[isHover, setIsHover] = useState(false)

   

    return(
        <div style={{width: '100%',height: '100vh',display: 'flex',flexDirection:'column', justifyContent: 'center'}}>
            {colors.map((color) => {
                return(
                    <div className='change' style={{background: isHover ? 'white' : color.hex, border: isHover ? '2px solid gray ' : '',  width: '100%',height: '15%',color: isHover ? color.hex : 'white', textAlign: 'center', letterSpacing: '5px'}}
                     onMouseEnter={() => setIsHover(true)}
                     onMouseLeave={() => setIsHover(false)}
                    >
                        <h3 style={{textShadow: '1px 2px gray',fontFamily: 'Dancing Script', fontSize: '30px'
}}>{color.name}</h3>
                        </div>
                )
            })}
        </div>
    )
}

export default Colors