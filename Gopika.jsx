import React from 'react'

export  function Gopika(props) {
    console.log(props.heart);
    console.log(props.flames);
  return (
    <div>
        <b>heart :</b>
        <strong>flames </strong>
        <span>{props.heart}</span>
        <span>{props.flames}</span>
    </div>
  )
}
