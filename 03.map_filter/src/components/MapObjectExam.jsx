import React from 'react'

const MapObjectExam = () => {
    
    let members = [
        {id:1, name:'둔근', size:80, gender:'M'},
        {id:2, name:'상완이두근', size:40, gender:'F'},
        {id:3, name:'중앙일두근', size:15, gender:'M'}
    ]

    let result = members.map((member)=>{
        return(<div key={member.id}>{member.id}.{member.name}.{member.size}.{member.gender === "M"?"남자":"여자"}</div>);
    })
  return (
    <div>
        {members.map((member) =>(
            <div key={member.id}>{member.id}.{member.name}.{member.size}.{member.gender === "M"?"남자":"여자"}</div>
        ))}
        <hr />
        {result}
    </div>
  )
}

export default MapObjectExam