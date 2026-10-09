import React from 'react'

const ChildComponent = ({user}) => {
    const{name,age,email}=user
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default ChildComponent