import React from 'react'

const Error = ({isError})=>{
   
   return(
    <>
       <div className='msg'>
          {isError}
       </div>
    </>
   )
}
export default Error