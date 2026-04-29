import React from 'react';
import assets from '../assets/hero.png'

function card() {
    return (
        <div className='card'>
            <h1>React</h1>
            <h2>React is a JavaScript library for building user interfaces.</h2>
        </div>
    )
}

function card2() {      
    return (  
        <div className='parent'>
        <div className='card2'>
            <img src='assets/hero.png' alt="Hero"></img>
            <h1>Urmila Soni</h1>
            <p>She is a software engineer with expertise in React and JavaScript. She has a passion for
                 building user-friendly web applications and is always eager to learn new technologies.</p>
                 <button>View Profile</button>
        </div>

        <div className='card2'>
            <img src='assets/hero.png' alt="Hero"></img>
            <h1>Urmila Soni</h1>
            <p>She is a software engineer with expertise in React and JavaScript. She has a passion for
                 building user-friendly web applications and is always eager to learn new technologies.</p>
            <button>View Profile</button>
       
        </div> 
        </div> 
    )
}

// export default card;
export default card2;
