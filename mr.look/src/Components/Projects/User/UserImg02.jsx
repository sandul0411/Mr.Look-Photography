import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg02 = () => {

    const [image ,setImage] = useState()
    const userId = '65e6fda155e0c4f579048053';

  
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='h-[600px] pt-10 transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
   
    </div>
    </>
  )
}

export default UserImg02