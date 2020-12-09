import React from 'react'

const DogDisplay = (props) => {
    return(
        <div>
            <img src={props.img} alt='puppers' />
        </div>
    )
}

export default DogDisplay;