import React, { useEffect, useState } from 'react'


const Table = () => {

  const [data, setData] = useState([])

        useEffect(()=>{
          fetch(`http://localhost:8000/users`)
      .then(response => response.json())
      .then(data => {
          setData(data)
          setRecords(data)
      })
      .catch(err => console.error(err));
      },[])

      const deleteUser = (id) => {
        fetch(`http://localhost:8000/users/${id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (response.ok) {
            setData(data.filter(user => user.id !== id))
          } else {
            console.error('Failed to delete user')
          }
        })
        .catch(err => console.error(err))
      }

  return (
    <>
     <div className="container">
      <h2>Users</h2>
      <table className="table">
    <thead className="thead-dark">
    <tr >
    <th scope="col">S.N:</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone </th>
      <th scope="col">City</th>
      <th scope="col">District</th>
      <th scope="col">Province</th>
      <th scope="col">Country</th>
      {/* <th scope="col">Action</th> */}
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
      {data.map((item, index) => (
        <tr key={item.id}>
        <td>{index + 1}</td>

        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.city}</td>
        <td>{item.district}</td>
        <td>{item.province}</td>
        <td>{item.country}</td>
        {/* <td><button className='btn btn-primary'>edit</button></td> */}
        <td><button className='btn btn-danger' onClick={() => deleteUser(item.id)}>delete</button></td>
    </tr>
      ))}
    
  </tbody>
</table>
     </div>
    </>
  )
}

export default Table
