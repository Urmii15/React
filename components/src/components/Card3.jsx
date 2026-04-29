import React from 'react';
// import assets from '../assets/hero.png'

function Card3(props) {

console.log(props.user,props.age, props.img)

  return (
    <div className='parent'>
    <div className="card3">
    <img src={props.img} alt="Hero"></img>
      <h2>{props.user}, {props.age}</h2>
      <p>This is the content of Card 3.</p>
    <button>View Profile</button>
    </div>
    </div>
  );
}

export default Card3;