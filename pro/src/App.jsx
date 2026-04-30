import React from 'react';
import Card from './components/Card';
import User from './components/User';

const App = () => {

  // const arr = [1, 2, 3, 4, 5];

  const arr = [{ user: 'Rohit' }, { user: 'Rohan' }, { user: 'Aman' }, { user: 'Sahil' }, { user: 'Shivam' }];

   arr.map(function(elem) {
    console.log(elem.user);
  })

  return (
    <>
      <div className='parent'>
        {/* <Card /> */}

        {/* <User name={arr[0]} />  
        <User name='Rohan' />  
        <User name='Aman' />   */}


      </div> 

      {/* {arr.map((item) => {
          return <User name={item} />
        })} */}


    </>
  );
}

export default App;