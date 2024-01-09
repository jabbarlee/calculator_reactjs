import React, { useState } from 'react'

function Buttons() {
    const [display, setDisplay] = useState([]);

    const buttonList = [
        '7', '8', '9', 'c',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '=', '*'
    ]

    const handleFinal = (button) => {
        console.log(`${button} is clicked`);
        let finalAnswer = eval(display.join(''));
        console.log(finalAnswer);
        setDisplay([finalAnswer])
    }

    const handleNums= (button) => {
        console.log(`${button} is clicked`);
        setDisplay([...display, button])
        console.log(display)
    }
    const handleClean = () => {
        setDisplay([]);
    }
  return (
    <div>
        <div id='display-wrapper'>
            <p>{display}</p>
        </div>
        <div id='button-wrapper'>
            {buttonList.map((button) => {
                if(button === '='){
                    return(<button onClick={() => handleFinal(button)} key={button} className='buttons'>{button}</button>)
                }else if(button === 'c'){
                    return(<button onClick={handleClean} key={button} className='buttons'>{button}</button>)
                }else{
                    return(<button onClick={() => handleNums(button)} key={button} className='buttons'>{button}</button>)
                }
            })}
        </div>
    </div>
  )
}

export default Buttons
