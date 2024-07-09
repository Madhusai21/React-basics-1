import React from 'react'

export  function Mahesh(props) {
    console.log(props.mahesh)
  return (
    <div>
        <b> mahesh : </b>
        <span>{props.mahesh}</span>
    </div>
  )
}
