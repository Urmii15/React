import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card'
import Card3 from './components/Card3'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div>Welcom to React</div>
    <Navbar />
    <Card2 />
    <Card3 />
    <div className='parent'>
    <Card3 user='Ritu' age={15} img='https://tse1.mm.bing.net/th/id/OIP.ThZnAnZzdUOA8ZU-hJ3AEAHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3' />
    <Card3 user='Ritik' age={15} img='https://tse3.mm.bing.net/th/id/OIP.Hy1lRm0SvJq48095zYfVmQAAAA?cb=thfvnext&pid=ImgDet&w=205&h=205&c=7&o=7&rm=3'/>
    </div>
    </>
  )
}

export default App
