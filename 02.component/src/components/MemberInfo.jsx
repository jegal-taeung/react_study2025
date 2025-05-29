import React from 'react'

const MemberInfo = ({team, name}) => {
  return (
    <div className='team-info'>
        <h4>{team}</h4>
        <p>{name}</p>
    </div>
  )
}

export default MemberInfo