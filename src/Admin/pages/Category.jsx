import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'

export default function Category() {

  const [category, setCategory] = useState([])

// useEffect(() =>{
// axios.get('http://localhost:3456/api/getallcategories')
// .then((json) => console.log(json))
// .catch((err) => console.log(err))
// }, [])

 return (
  <div className="container">
    <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
      <span className='fs-4 fw-bold text-white'>category</span>
     <CategoryModal/>
    </div>
    <div className="container">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Category Name</th>
      <th scope="col">Category Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Category Name</td>
      <td>Category Image</td>
     
    </tr>
   
   
  </tbody>
</table>

    </div>
  </div>
  )
}
