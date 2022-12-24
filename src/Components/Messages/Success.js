import React from 'react'

const Success = ({successMsg})=>{
   
   return(
    <>
       <div className='msg msgSuccess'>
          {successMsg}
       </div>
    </>
   )
}
export default Success