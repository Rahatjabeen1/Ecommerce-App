import React, { useContext } from 'react'
import { GlobalContext } from '../Context/context'

export default function User() {
  const {state,dispatch} = useContext(GlobalContext)
  return (
    <div>
      <button className='btn btn-dark'
       onClick ={() => {
        dispatch({
          type: "LOGOUT"
        })

       }}>LOGOUT
     
      </button>
      
    </div>
  )
}
